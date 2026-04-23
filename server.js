const { createStrapi } = require('@strapi/strapi');
const path = require('path');
createStrapi({ appDir: __dirname, distDir: path.join(__dirname, 'dist') }).start();
