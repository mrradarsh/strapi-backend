/**
 * server.js — Hostinger Entry Point
 * 1. Temp server starts immediately on PORT (prevents 503 timeout)
 * 2. strapi.load() runs in background (30-60s)
 * 3. Temp server closes, Strapi takes over the SAME port
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const appDir = __dirname;
const PORT = parseInt(process.env.PORT || '1337', 10);
const LOG_FILE = '/tmp/strapi-error.log';

let statusMessage = '⏳ Strapi is loading... please wait 60 seconds and refresh.';

try { fs.writeFileSync(LOG_FILE, '=== started ' + new Date().toISOString() + ' ===\n'); } catch (e) {}

function log(msg) {
    const line = '[' + new Date().toISOString() + '] ' + msg;
    console.log(line);
    try { fs.appendFileSync(LOG_FILE, line + '\n'); } catch (e) {}
}
function readLog() {
    try { return fs.readFileSync(LOG_FILE, 'utf8'); } catch (e) { return '(log: ' + e.message + ')'; }
}

// Intercept process.exit so we can log before dying
const _realExit = process.exit.bind(process);
process.exit = (code) => {
    log('process.exit(' + code + ') called');
    statusMessage = '❌ Strapi exited (code ' + code + '). See log.';
    setTimeout(() => _realExit(code || 1), 500);
};
process.on('uncaughtException', (err) => log('uncaughtException: ' + (err.stack || err)));
process.on('unhandledRejection', (r) => log('unhandledRejection: ' + r));

// ── Step 1: Temp server binds PORT immediately ────────────────────────────────
const tempServer = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(statusMessage + '\n\n=== /tmp/strapi-error.log ===\n' + readLog());
});

tempServer.listen(PORT, '0.0.0.0', () => {
    log('Temp server listening on port ' + PORT);
    loadAndSwitch();
});

// ── Step 2: Load Strapi, then hand off port ───────────────────────────────────
async function loadAndSwitch() {
    try {
        process.env.HOST = '0.0.0.0';
        // PORT stays same — Strapi will listen on it after temp server closes

        const strapiPkg = require(path.join(appDir, 'node_modules', '@strapi', 'strapi'));
        const createStrapi = strapiPkg.createStrapi || strapiPkg.default?.createStrapi || strapiPkg;

        const strapi = createStrapi({ appDir, distDir: path.join(appDir, 'dist') });

        log('strapi.load() starting...');
        statusMessage = '⏳ Strapi initializing (up to 60s)... please refresh.';
        await strapi.load();
        log('strapi.load() complete. Switching port...');

        // ── Step 3: Close temp server → Strapi takes over PORT ──────────────
        if (tempServer.closeAllConnections) tempServer.closeAllConnections();

        tempServer.close(async () => {
            log('Temp server closed. Starting Strapi on port ' + PORT);
            try {
                // strapi.isLoaded = true, so start() skips load() and only calls server.listen()
                await strapi.start();
                log('✅ Strapi is live on port ' + PORT);
            } catch (err) {
                log('strapi.start() failed: ' + (err.stack || err.message));
                statusMessage = '❌ ' + err.message;
            }
        });

    } catch (err) {
        log('loadAndSwitch error: ' + (err.stack || err.message));
        statusMessage = '❌ Load failed: ' + err.message;
    }
}
