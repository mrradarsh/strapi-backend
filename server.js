const { createStrapi } = require('@strapi/strapi');
createStrapi({ distDir: './dist' }).start();
