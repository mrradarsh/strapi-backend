/**
 * Hostinger Production Server for Strapi v5
 * Simple direct startup - no proxy needed since Strapi starts correctly.
 */

const path = require('path');
const appDir = __dirname;

// Prevent Strapi's process.exit() from killing the app
process.exit = (code) => {
    console.error('[server.js] process.exit(' + code + ') was intercepted. Keeping alive.');
};

process.on('unhandledRejection', (reason) => {
    console.error('[unhandledRejection]', reason);
});

process.on('uncaughtException', (err) => {
    console.error('[uncaughtException]', err);
});

// Load and start Strapi directly on Hostinger's PORT
const { createStrapi } = require(path.join(appDir, 'node_modules', '@strapi', 'strapi'));

createStrapi({
    appDir: appDir,
    distDir: path.join(appDir, 'dist'),
}).start().then(() => {
    console.log('Strapi started successfully on port', process.env.PORT);
}).catch((err) => {
    console.error('Strapi failed to start:', err);
});
