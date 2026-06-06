const fs = require('fs/promises');
const os = require('os');
const path = require('path');

const DEFAULT_DOC_ID = '1Egdv3N8XBunIYfmC5sb-atFCeGTUCzCMHBqJ-pCa_2A';
const POST_UID = 'api::post.post';
const UPLOAD_FILE_UID = 'plugin::upload.file';

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

const fetchGoogleDocHtml = async (docId = DEFAULT_DOC_ID) => {
  const response = await fetch(`https://docs.google.com/document/d/${docId}/export?format=html`);

  if (!response.ok) {
    throw new Error(`Google Doc HTML export failed with ${response.status}`);
  }

  return response.text();
};

const decodeHtmlEntities = (value) =>
  String(value || '')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');

const getHtmlTabMarkers = (html) => {
  const markerRegex = /<span\b[^>]*>\s*Tab\s*(\d+)\b[^<]*<\/span>/gi;

  return [...String(html || '').matchAll(markerRegex)].map((marker) => ({
    tab: Number(marker[1]),
    index: marker.index,
    marker: marker[0].replace(/<[^>]+>/g, '').trim(),
  }));
};

const getImageSourceFromHtml = (html) => {
  const imageTag = String(html || '').match(/<img\b[^>]*\bsrc=(["'])(.*?)\1[^>]*>/i);

  return imageTag ? decodeHtmlEntities(imageTag[2]) : null;
};

const createTabImageResolver = (html) => {
  const normalizedHtml = String(html || '');
  const markers = getHtmlTabMarkers(normalizedHtml);

  return (tab) => {
    const markerIndex = markers.findIndex((marker) => marker.tab === tab);

    if (markerIndex === -1) return null;

    const marker = markers[markerIndex];
    const nextMarker = markers[markerIndex + 1] || { index: normalizedHtml.length };
    const tabHtml = normalizedHtml.slice(marker.index, nextMarker.index);
    const source = getImageSourceFromHtml(tabHtml);

    return source ? { source, marker: marker.marker } : null;
  };
};

const shouldAttachImages = (options = {}) =>
  options.attachImages !== false && process.env.BLOG_ATTACH_IMAGES !== 'false';

const withTabImages = async (tabBlogs, options = {}) => {
  if (!shouldAttachImages(options) || tabBlogs.length === 0) return tabBlogs;

  const tabsWithLocalImages = await Promise.all(
    tabBlogs.map(async (tabBlog) => ({
      ...tabBlog,
      image: (await getLocalTabImage(tabBlog.tab)) || tabBlog.image,
    }))
  );
  const missingImages = tabsWithLocalImages.filter((tabBlog) => !tabBlog.image);

  if (missingImages.length === 0) return tabsWithLocalImages;

  const docId = options.docId || process.env.BLOG_SOURCE_DOC_ID || DEFAULT_DOC_ID;
  const html = options.html || (await fetchGoogleDocHtml(docId));
  const resolveImage = createTabImageResolver(html);

  return tabsWithLocalImages.map((tabBlog) => ({
    ...tabBlog,
    image: tabBlog.image || resolveImage(tabBlog.tab),
  }));
};

const getLocalTabImage = async (tab) => {
  const imageDir = process.env.BLOG_LOCAL_IMAGE_DIR || path.join(process.cwd(), 'scripts', 'blog-images');
  const extensions = ['png', 'jpg', 'jpeg', 'webp'];

  for (const extension of extensions) {
    const filepath = path.join(imageDir, `tab-${tab}.${extension}`);

    try {
      await fs.access(filepath);

      return {
        filepath,
        mimeType: extension === 'jpg' || extension === 'jpeg' ? 'image/jpeg' : `image/${extension}`,
        extension: extension === 'jpeg' ? 'jpg' : extension,
        marker: `local tab-${tab}.${extension}`,
      };
    } catch {
    }
  }

  return null;
};

const getImageExtension = (mimeType) => {
  const extensions = {
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg',
    'image/png': 'png',
    'image/webp': 'webp',
    'image/gif': 'gif',
  };

  return extensions[mimeType] || 'png';
};

const dataUriToImage = (source) => {
  const match = String(source || '').match(/^data:([^;,]+);base64,(.+)$/s);

  if (!match) return null;

  const mimeType = match[1];
  const buffer = Buffer.from(match[2], 'base64');

  return {
    buffer,
    mimeType,
    extension: getImageExtension(mimeType),
  };
};

const sourceToImage = async (source) => {
  const dataUriImage = dataUriToImage(source);

  if (dataUriImage) return dataUriImage;

  const response = await fetch(source);

  if (!response.ok) {
    throw new Error(`Blog image download failed with ${response.status}`);
  }

  const mimeType = (response.headers.get('content-type') || 'image/png').split(';')[0];
  const arrayBuffer = await response.arrayBuffer();

  return {
    buffer: Buffer.from(arrayBuffer),
    mimeType,
    extension: getImageExtension(mimeType),
  };
};

const getTabImageUploadData = async (tabBlog) => {
  if (tabBlog.image?.filepath) {
    const buffer = await fs.readFile(tabBlog.image.filepath);

    return {
      buffer,
      mimeType: tabBlog.image.mimeType || 'image/png',
      extension: tabBlog.image.extension || 'png',
    };
  }

  if (tabBlog.image?.source) return sourceToImage(tabBlog.image.source);

  return null;
};

const getExistingUploadedFile = async (strapi, filename) =>
  strapi.db.query(UPLOAD_FILE_UID).findOne({
    where: { name: filename },
    select: ['id', 'name', 'url'],
  });

const uploadCoverImage = async (strapi, tabBlog) => {
  if (!tabBlog.image?.source && !tabBlog.image?.filepath) return null;

  const image = await getTabImageUploadData(tabBlog);
  if (!image) return null;

  const filename = `${tabBlog.slug || `tab-${tabBlog.tab}`}.${image.extension}`;
  const existingFile = await getExistingUploadedFile(strapi, filename);

  if (existingFile) return existingFile;

  const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'khw-blog-image-'));
  const filepath = path.join(tmpDir, filename);

  await fs.writeFile(filepath, image.buffer);

  try {
    const [uploadedFile] = await strapi.plugin('upload').service('upload').upload({
      data: {
        fileInfo: {
          name: filename,
          alternativeText: tabBlog.title,
          caption: tabBlog.title,
        },
      },
      files: {
        filepath,
        originalFilename: filename,
        mimetype: image.mimeType,
        size: image.buffer.length,
      },
    });

    return uploadedFile;
  } finally {
    await fs.rm(tmpDir, { recursive: true, force: true });
  }
};

const attachCoverImageToPost = async (strapi, existingPost, coverImage) => {
  if (!existingPost?.id || !coverImage?.id) return null;

  await strapi.db.query(POST_UID).update({
    where: { id: existingPost.id },
    data: { coverImage: coverImage.id },
  });

  return coverImage;
};

const getBlogTabs = async (docId = DEFAULT_DOC_ID) => parseTabs(await fetchGoogleDocText(docId));

const getExistingPost = async (strapi, slug) =>
  strapi.db.query(POST_UID).findOne({
    where: { slug },
    select: ['id', 'documentId', 'slug', 'title', 'publishedAt', 'uploadDate'],
    populate: {
      coverImage: {
        select: ['id', 'name', 'url'],
      },
    },
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
  const coverImage = options.coverImage;

  if (coverImage?.id) {
    data.coverImage = coverImage.id;
  }

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
    if (!existingPost.coverImage?.id && shouldAttachImages(options) && tabBlog.image) {
      const coverImage = await uploadCoverImage(strapi, tabBlog);
      await attachCoverImageToPost(strapi, existingPost, coverImage);

      return {
        tab: tabBlog.tab,
        title: tabBlog.title,
        slug: tabBlog.slug,
        status: 'image-attached',
        coverImageId: coverImage?.id,
      };
    }

    return {
      tab: tabBlog.tab,
      title: tabBlog.title,
      slug: tabBlog.slug,
      status: 'exists',
      hasCoverImage: Boolean(existingPost.coverImage?.id),
    };
  }

  const coverImage = shouldAttachImages(options) ? await uploadCoverImage(strapi, tabBlog) : null;
  const created = await createPublishedPost(strapi, tabBlog, { ...options, coverImage });

  return {
    tab: tabBlog.tab,
    title: tabBlog.title,
    slug: tabBlog.slug,
    status: 'published',
    documentId: created?.documentId,
    coverImageId: coverImage?.id,
  };
};

const publishTabRange = async (strapi, options = {}) => {
  const docId = options.docId || process.env.BLOG_SOURCE_DOC_ID || DEFAULT_DOC_ID;
  const fromTab = Number(options.fromTab || process.env.BLOG_CATCH_UP_FROM_TAB || 25);
  const toTab = Number(options.toTab || process.env.BLOG_CATCH_UP_TO_TAB || fromTab);
  const tabs = await getBlogTabs(docId);
  const selectedTabs = await withTabImages(
    tabs.filter((tabBlog) => tabBlog.tab >= fromTab && tabBlog.tab <= toTab),
    { ...options, docId }
  );
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

    if (!existingPost || !existingPost.coverImage?.id) {
      const [tabWithImage] = await withTabImages([tabBlog], { ...options, docId });

      return publishTabBlog(strapi, tabWithImage, options);
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
      if (item.startsWith('--text-file=')) args.textFile = item.slice('--text-file='.length);
      if (item.startsWith('--html-file=')) args.htmlFile = item.slice('--html-file='.length);
      if (item === '--with-images') args.withImages = true;
      if (item === '--next') args.next = true;
      return args;
    },
    { dryRun: false, next: false, withImages: false }
  );

const runCli = async () => {
  const dotenv = require('dotenv');
  const args = parseCliArgs(process.argv.slice(2));
  const appDir = path.resolve(__dirname, '..');

  dotenv.config({ path: process.env.ENV_PATH || path.join(appDir, '.env') });

  if (args.dryRun) {
    const docId = args.docId || process.env.BLOG_SOURCE_DOC_ID || DEFAULT_DOC_ID;
    const docText = args.textFile ? await fs.readFile(args.textFile, 'utf8') : await fetchGoogleDocText(docId);
    const tabs = parseTabs(docText);
    const fromTab = Number(args.fromTab || process.env.BLOG_CATCH_UP_FROM_TAB || 25);
    const toTab = Number(args.toTab || process.env.BLOG_CATCH_UP_TO_TAB || fromTab);
    const selectedTabs = args.next
      ? tabs.filter((tabBlog) => tabBlog.tab >= Number(args.startTab || process.env.BLOG_AUTO_START_TAB || 31)).slice(0, 5)
      : tabs.filter((tabBlog) => tabBlog.tab >= fromTab && tabBlog.tab <= toTab);
    const html = args.htmlFile ? await fs.readFile(args.htmlFile, 'utf8') : undefined;
    const selectedTabsWithImages = args.withImages
      ? await withTabImages(selectedTabs, {
          docId,
          html,
        })
      : selectedTabs;

    console.log(
      JSON.stringify(
        selectedTabsWithImages.map((tabBlog) => ({
          tab: tabBlog.tab,
          title: tabBlog.title,
          slug: tabBlog.slug,
          paragraphs: tabBlog.content.length,
          hasImage: Boolean(tabBlog.image?.source || tabBlog.image?.filepath),
          imageBytes: tabBlog.image?.source?.startsWith('data:')
            ? Buffer.byteLength(tabBlog.image.source.split(',')[1] || '', 'base64')
            : tabBlog.image?.filepath
              ? undefined
            : undefined,
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
    const html = args.htmlFile ? await fs.readFile(args.htmlFile, 'utf8') : undefined;
    const publishOptions = { ...args, html };
    const results = args.next
      ? [await publishNextTab(strapi, publishOptions)]
      : await publishTabRange(strapi, publishOptions);

    console.log(JSON.stringify(results, null, 2));
  } finally {
    await strapi.destroy();
  }
};

module.exports = {
  DEFAULT_DOC_ID,
  parseTabs,
  getBlogTabs,
  createTabImageResolver,
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
