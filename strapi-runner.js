/**
 * strapi-runner.js - Runs in a child process.
 * Loads and starts Strapi, sends status back to parent via IPC.
 */

const path = require('path');
const appDir = path.dirname(__filename);

process.on('uncaughtException', (err) => {
    process.send({ type: 'error', message: err.stack || String(err) });
    process.exit(1);
});

process.on('unhandledRejection', (reason) => {
    const msg = reason && reason.stack ? reason.stack : String(reason);
    process.send({ type: 'error', message: msg });
    process.exit(1);
});

async function run() {
    try {
        const { createStrapi } = require(path.join(appDir, 'node_modules', '@strapi', 'strapi'));
        await createStrapi({
            appDir: appDir,
            distDir: path.join(appDir, 'dist'),
        }).start();
        process.send({ type: 'ready', port: process.env.PORT });
    } catch (err) {
        process.send({ type: 'error', message: err.stack || String(err) });
        process.exit(1);
    }
}

run();
