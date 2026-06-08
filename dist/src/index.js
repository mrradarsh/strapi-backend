"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const getGoogleDocPublisher = () => require(path_1.default.join(process.cwd(), 'scripts', 'google-doc-blog-publisher.cjs'));
exports.default = {
    /**
     * An asynchronous register function that runs before
     * your application is initialized.
     *
     * This gives you an opportunity to extend code.
     */
    register( /* { strapi }: { strapi: Core.Strapi } */) { },
    /**
     * An asynchronous bootstrap function that runs before
     * your application gets started.
     *
     * This gives you an opportunity to set up your data model,
     * run jobs, or perform some special logic.
     */
    async bootstrap({ strapi }) {
        const shouldCatchUp = process.env.BLOG_CATCH_UP_ON_BOOT !== 'false';
        const shouldSyncImages = process.env.BLOG_SYNC_IMAGES_ON_BOOT !== 'false';
        if (!shouldCatchUp && !shouldSyncImages)
            return;
        try {
            const { publishTabRange, syncExistingTabImages } = getGoogleDocPublisher();
            if (shouldSyncImages) {
                const imageResults = await syncExistingTabImages(strapi, {
                    docId: process.env.BLOG_SOURCE_DOC_ID,
                    fromTab: Number(process.env.BLOG_SYNC_IMAGES_FROM_TAB || 1),
                    toTab: Number(process.env.BLOG_SYNC_IMAGES_TO_TAB || 50),
                });
                strapi.log.info(`[google-doc-blog-publisher] boot image sync ${JSON.stringify(imageResults)}`);
            }
            if (!shouldCatchUp)
                return;
            const publishResults = await publishTabRange(strapi, {
                docId: process.env.BLOG_SOURCE_DOC_ID,
                fromTab: Number(process.env.BLOG_CATCH_UP_FROM_TAB || 25),
                toTab: Number(process.env.BLOG_CATCH_UP_TO_TAB || 30),
            });
            strapi.log.info(`[google-doc-blog-publisher] boot catch-up ${JSON.stringify(publishResults)}`);
        }
        catch (error) {
            strapi.log.error('[google-doc-blog-publisher] boot catch-up failed', error);
        }
    },
};
