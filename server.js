const path = require('path');

// Ensure Node.js resolves modules from this app's own node_modules directory
// This is critical for Hostinger's environment where CWD may differ from app dir
const appDir = path.dirname(require.resolve('./package.json'));
require('module').globalPaths.unshift(path.join(appDir, 'node_modules'));
process.chdir(appDir);

// Load Strapi using absolute paths to avoid module resolution issues
const strapiPkg = require(path.join(appDir, 'node_modules', '@strapi', 'strapi'));
const createStrapi = strapiPkg.createStrapi;

createStrapi({
    appDir: appDir,
    distDir: path.join(appDir, 'dist'),
}).start();
