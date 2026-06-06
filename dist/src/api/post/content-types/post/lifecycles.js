"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const POST_UID = 'api::post.post';
const pickStableUploadDate = (data, existingPost) => existingPost?.uploadDate ||
    existingPost?.publishedAt ||
    existingPost?.createdAt ||
    data.uploadDate ||
    data.publishedAt ||
    new Date().toISOString();
const findExistingPost = async (where = {}) => {
    const fields = ['id', 'documentId', 'uploadDate', 'publishedAt', 'createdAt'];
    try {
        if (Object.keys(where).length > 0) {
            return await strapi.db.query(POST_UID).findOne({ where, select: fields });
        }
    }
    catch {
    }
    const id = where.id;
    const documentId = where.documentId;
    try {
        if (id) {
            return await strapi.db.query(POST_UID).findOne({ where: { id }, select: fields });
        }
        if (documentId) {
            return await strapi.db.query(POST_UID).findOne({ where: { documentId }, select: fields });
        }
    }
    catch {
    }
    return null;
};
exports.default = {
    beforeCreate(event) {
        event.params.data.uploadDate = pickStableUploadDate(event.params.data);
    },
    async beforeUpdate(event) {
        const existingPost = await findExistingPost(event.params.where);
        event.params.data.uploadDate = pickStableUploadDate(event.params.data, existingPost);
    },
};
