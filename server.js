const http = require('http');

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection:', reason);
    try {
        const server = http.createServer((req, res) => {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Strapi Error (Unhandled Rejection):\n\n' + (reason && reason.stack ? reason.stack : String(reason)));
        });
        server.listen(process.env.PORT || 3000);
    } catch(e) {}
});

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    try {
        const server = http.createServer((req, res) => {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Strapi Error (Uncaught Exception):\n\n' + (err && err.stack ? err.stack : String(err)));
        });
        server.listen(process.env.PORT || 3000);
    } catch(e) {}
});

async function startApp() {
    try {
        const { createStrapi } = require('@strapi/strapi');
        const path = require('path');
        // Start Strapi
        await createStrapi({ appDir: __dirname, distDir: path.join(__dirname, 'dist') }).start();
    } catch (error) {
        // If Strapi fails, show the error in the browser
        const server = http.createServer((req, res) => {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Strapi Failed to Start. Error:\n\n' + (error && error.stack ? error.stack : String(error)));
        });
        server.listen(process.env.PORT || 3000);
    }
}

startApp();
