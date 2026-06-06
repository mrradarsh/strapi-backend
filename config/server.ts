import type { Core } from '@strapi/strapi';
import path from 'path';

const getGoogleDocPublisher = () =>
  require(path.join(process.cwd(), 'scripts', 'google-doc-blog-publisher.cjs'));

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Server => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  cron: {
    enabled: env.bool('BLOG_AUTO_PUBLISH_ENABLED', true),
    tasks: {
      publishGoogleDocBlogDaily: {
        task: async ({ strapi }) => {
          const { publishNextTab } = getGoogleDocPublisher();
          const result = await publishNextTab(strapi, {
            docId: env('BLOG_SOURCE_DOC_ID', undefined),
            startTab: env.int('BLOG_AUTO_START_TAB', 31),
          });

          strapi.log.info(`[google-doc-blog-publisher] ${JSON.stringify(result)}`);
        },
        options: {
          rule: env('BLOG_AUTO_PUBLISH_CRON', '0 0 10 * * *'),
          tz: env('BLOG_AUTO_PUBLISH_TZ', 'Asia/Kolkata'),
        },
      },
    },
  },
});

export default config;
