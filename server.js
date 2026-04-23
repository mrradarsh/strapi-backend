/**
 * Hostinger Production Entry Point for Strapi v5
 * 
 * Strategy: Start a basic HTTP server FIRST to keep the process alive.
 * Then attempt to load Strapi. If Strapi fails for any reason (DB error,
 * module error, etc.), the basic HTTP server shows the exact error in the
 * browser instead of crashing to 503.
 */

const http = require('http');
const path = require('path');

const appDir = __dirname;
const PORT = process.env.PORT || 1337;
const HOST = '0.0.0.0';

let statusMessage = 'Strapi is starting up... please refresh in 30 seconds.';
let strapiStarted = false;

// ── Step 1: Start a keep-alive HTTP server IMMEDIATELY ──────────────────────
// This ensures Hostinger's proxy always has something to connect to.
// Once Strapi starts successfully, it takes over the actual API serving.
const keepAliveServer = http.createServer((req, res) => {
    if (strapiStarted) {
        // Strapi took over - this server should not be handling requests anymore
        res.writeHead(502, { 'Content-Type': 'text/plain' });
        res.end('Port conflict: Strapi started but port was not released.');
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(statusMessage);
    }
});

keepAliveServer.listen(PORT, HOST, () => {
    console.log('Keep-alive server listening on port', PORT);
    // ── Step 2: Now try to load Strapi ──────────────────────────────────────
    loadStrapi();
});

// ── Step 3: Catch ANY unhandled async errors and show them ──────────────────
process.on('unhandledRejection', (reason) => {
    const msg = reason && reason.stack ? reason.stack : String(reason);
    console.error('[unhandledRejection]', msg);
    statusMessage = '⚠️ Strapi Async Error:\n\n' + msg;
});

process.on('uncaughtException', (err) => {
    const msg = err && err.stack ? err.stack : String(err);
    console.error('[uncaughtException]', msg);
    statusMessage = '⚠️ Strapi Uncaught Error:\n\n' + msg;
});

// ── Prevent process.exit() from killing our keep-alive server ───────────────
const _originalExit = process.exit;
process.exit = function (code) {
    statusMessage = '⚠️ Strapi called process.exit(' + code + '). ' +
        'This usually means a fatal startup error. Check DATABASE env vars on Hostinger.';
    console.error('[BLOCKED] process.exit(' + code + ')');
    // Do NOT call _originalExit - keep the server alive to show the error
};

async function loadStrapi() {
    try {
        // Use absolute path to avoid module resolution issues in Hostinger environment
        const strapiModule = require(path.join(appDir, 'node_modules', '@strapi', 'strapi'));
        const createStrapi = strapiModule.createStrapi;

        if (typeof createStrapi !== 'function') {
            statusMessage = '⚠️ @strapi/strapi loaded but createStrapi is not a function. ' +
                'Keys: ' + Object.keys(strapiModule).join(', ');
            return;
        }

        // Close keep-alive server before Strapi tries to bind to the same port
        keepAliveServer.close(() => {
            console.log('Keep-alive server closed. Handing port to Strapi...');
            strapiStarted = true;
            createStrapi({
                appDir: appDir,
                distDir: path.join(appDir, 'dist'),
            }).start().catch((err) => {
                // Strapi's .start() rejected - restart keep-alive on error
                statusMessage = '⚠️ Strapi .start() failed:\n\n' + (err && err.stack ? err.stack : String(err));
                console.error('[Strapi .start() error]', statusMessage);
                strapiStarted = false;
                // Re-open keep-alive server to show the error
                keepAliveServer.listen(PORT, HOST);
            });
        });

    } catch (err) {
        statusMessage = '⚠️ Failed to load Strapi module:\n\n' + (err && err.stack ? err.stack : String(err));
        console.error('[loadStrapi catch]', statusMessage);
        // Keep-alive server is still running and will show this error
    }
}
