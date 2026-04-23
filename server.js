const path = require('path');
const http = require('http');

// *** FIX: Explicitly tell Node.js where to find node_modules ***
// This resolves the "Cannot find module '@strapi/strapi'" error on Hostinger
const appDir = __dirname;
require('module').globalPaths.push(path.join(appDir, 'node_modules'));
process.chdir(appDir);

process.on('unhandledRejection', (reason) => {
    console.error('Unhandled Rejection:', reason);
    startErrorServer('Strapi Error (Unhandled Rejection):\n\n' + (reason && reason.stack ? reason.stack : String(reason)));
});

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    startErrorServer('Strapi Error (Uncaught Exception):\n\n' + (err && err.stack ? err.stack : String(err)));
});

let errorServerStarted = false;
function startErrorServer(message) {
    if (errorServerStarted) return;
    errorServerStarted = true;
    try {
        const server = http.createServer((req, res) => {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end(message);
        });
        server.listen(process.env.PORT || 3000);
    } catch(e) { console.error(e); }
}

async function startApp() {
    try {
        // Use absolute path to load @strapi/strapi from our local node_modules
        const strapiModule = require(path.join(appDir, 'node_modules', '@strapi', 'strapi'));
        const createStrapi = strapiModule.createStrapi || strapiModule.default || strapiModule;
        await createStrapi({ appDir, distDir: path.join(appDir, 'dist') }).start();
    } catch (error) {
        startErrorServer('Strapi Failed to Start. Error:\n\n' + (error && error.stack ? error.stack : String(error)));
    }
}

startApp();
