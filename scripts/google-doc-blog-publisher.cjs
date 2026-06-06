const DEFAULT_DOC_ID = '1Egdv3N8XBunIYfmC5sb-atFCeGTUCzCMHBqJ-pCa_2A';
const POST_UID = 'api::post.post';

const compact = (value) => String(value || '').replace(/\s+/g, ' ').trim();

const slugify = (value) =>
  compact(value)
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/['’]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase()
    .slice(0, 180);

const normalizeLine = (line) => {
  const trimmed = line.trim();

  if (/^\*\s+/.test(trimmed)) {
    return `•\t${trimmed.replace(/^\*\s+/, '')}`;
  }

  return trimmed;
};

const toParagraphBlock = (text) => ({
  type: 'paragraph',
  children: [
    {
      type: 'text',
      text,
    },
  ],
});

const linesToBlocks = (lines) => lines.map(normalizeLine).filter(Boolean).map(toParagraphBlock);

const parseTabs = (docText) => {
  const normalizedText = String(docText || '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  const markerRegex = /^\ufeff?\s*Tab\s*(\d+)\b.*$/gm;
  const markers = [...normalizedText.matchAll(markerRegex)];

  return markers.map((marker, index) => {
    const tab = Number(marker[1]);
    const start = marker.index;
    const end = index + 1 < markers.length ? markers[index + 1].index : normalizedText.length;
    const chunk = normalizedText.slice(start, end);
    const lines = chunk
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean);
    const markerLine = lines[0] || `Tab ${tab}`;
    const title = compact(lines[1]);
    const bodyLines = lines.slice(2);

    return {
      tab,
      marker: markerLine,
      title,
      slug: slugify(title),
      bodyLines,
      content: linesToBlocks(bodyLines),
    };
  });
};

const fetchGoogleDocText = async (docId = DEFAULT_DOC_ID) => {
  const response = await fetch(`https://docs.google.com/document/d/${docId}/export?format=txt`);

  if (!response.ok) {
    throw new Error(`Google Doc export failed with ${response.status}`);
  }

  return response.text();
};

const getBlogTabs = async (docId = DEFAULT_DOC_ID) => parseTabs(await fetchGoogleDocText(docId));

const getExistingPost = async (strapi, slug) =>
  strapi.db.query(POST_UID).findOne({
    where: { slug },
    select: ['id', 'documentId', 'slug', 'title', 'publishedAt'],
  });

const createPublishedPost = async (strapi, tabBlog, options = {}) => {
  const author = options.author || process.env.BLOG_DEFAULT_AUTHOR || 'Kiran Hajare';
  const publishedAt = options.publishedAt || new Date().toISOString();
  const data = {
    title: tabBlog.title,
    slug: tabBlog.slug,
    author,
    content: tabBlog.content,
    uploadDate: publishedAt,
    publishedAt,
  };

  const documentService = strapi.documents(POST_UID);
  const created = await documentService.create({
    status: 'published',
    data,
  });

  if (!created?.publishedAt && created?.documentId) {
    await documentService.publish({ documentId: created.documentId });
  }

  return created;
};

const publishTabBlog = async (strapi, tabBlog, options = {}) => {
  if (!tabBlog?.title || !tabBlog?.slug || tabBlog.content.length === 0) {
    return {
      tab: tabBlog?.tab,
      status: 'skipped',
      reason: 'Missing title, slug, or content',
    };
  }

  const existingPost = await getExistingPost(strapi, tabBlog.slug);

  if (existingPost) {
    return {
      tab: tabBlog.tab,
      title: tabBlog.title,
      slug: tabBlog.slug,
      status: 'exists',
    };
  }

  const created = await createPublishedPost(strapi, tabBlog, options);

  return {
    tab: tabBlog.tab,
    title: tabBlog.title,
    slug: tabBlog.slug,
    status: 'published',
    documentId: created?.documentId,
  };
};

const publishTabRange = async (strapi, options = {}) => {
  const docId = options.docId || process.env.BLOG_SOURCE_DOC_ID || DEFAULT_DOC_ID;
  const fromTab = Number(options.fromTab || process.env.BLOG_CATCH_UP_FROM_TAB || 25);
  const toTab = Number(options.toTab || process.env.BLOG_CATCH_UP_TO_TAB || fromTab);
  const tabs = await getBlogTabs(docId);
  const selectedTabs = tabs.filter((tabBlog) => tabBlog.tab >= fromTab && tabBlog.tab <= toTab);
  const results = [];

  for (const tabBlog of selectedTabs) {
    results.push(await publishTabBlog(strapi, tabBlog, options));
  }

  return results;
};

const publishNextTab = async (strapi, options = {}) => {
  const docId = options.docId || process.env.BLOG_SOURCE_DOC_ID || DEFAULT_DOC_ID;
  const startTab = Number(options.startTab || process.env.BLOG_AUTO_START_TAB || 31);
  const tabs = (await getBlogTabs(docId)).filter((tabBlog) => tabBlog.tab >= startTab);

  for (const tabBlog of tabs) {
    const existingPost = await getExistingPost(strapi, tabBlog.slug);

    if (!existingPost) {
      return publishTabBlog(strapi, tabBlog, options);
    }
  }

  return {
    status: 'done',
    reason: `No unpublished tabs found from Tab ${startTab}`,
  };
};

const parseCliArgs = (argv) =>
  argv.reduce(
    (args, item) => {
      if (item === '--dry-run') args.dryRun = true;
      if (item.startsWith('--from=')) args.fromTab = Number(item.slice('--from='.length));
      if (item.startsWith('--to=')) args.toTab = Number(item.slice('--to='.length));
      if (item.startsWith('--start=')) args.startTab = Number(item.slice('--start='.length));
      if (item.startsWith('--doc=')) args.docId = item.slice('--doc='.length);
      if (item === '--next') args.next = true;
      return args;
    },
    { dryRun: false, next: false }
  );

const runCli = async () => {
  const path = require('path');
  const dotenv = require('dotenv');
  const args = parseCliArgs(process.argv.slice(2));
  const appDir = path.resolve(__dirname, '..');

  dotenv.config({ path: process.env.ENV_PATH || path.join(appDir, '.env') });

  if (args.dryRun) {
    const tabs = await getBlogTabs(args.docId || process.env.BLOG_SOURCE_DOC_ID || DEFAULT_DOC_ID);
    const fromTab = Number(args.fromTab || process.env.BLOG_CATCH_UP_FROM_TAB || 25);
    const toTab = Number(args.toTab || process.env.BLOG_CATCH_UP_TO_TAB || fromTab);
    const selectedTabs = args.next
      ? tabs.filter((tabBlog) => tabBlog.tab >= Number(args.startTab || process.env.BLOG_AUTO_START_TAB || 31)).slice(0, 5)
      : tabs.filter((tabBlog) => tabBlog.tab >= fromTab && tabBlog.tab <= toTab);

    console.log(
      JSON.stringify(
        selectedTabs.map((tabBlog) => ({
          tab: tabBlog.tab,
          title: tabBlog.title,
          slug: tabBlog.slug,
          paragraphs: tabBlog.content.length,
        })),
        null,
        2
      )
    );
    return;
  }

  const { createStrapi } = require(path.join(appDir, 'node_modules', '@strapi', 'strapi'));
  const strapi = createStrapi({ appDir, distDir: path.join(appDir, 'dist') });

  await strapi.load();

  try {
    const results = args.next
      ? [await publishNextTab(strapi, args)]
      : await publishTabRange(strapi, args);

    console.log(JSON.stringify(results, null, 2));
  } finally {
    await strapi.destroy();
  }
};

module.exports = {
  DEFAULT_DOC_ID,
  parseTabs,
  getBlogTabs,
  publishTabBlog,
  publishTabRange,
  publishNextTab,
};

if (require.main === module) {
  runCli().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
