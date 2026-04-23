/**
 * Hostinger Production Server for Strapi v5
 *
 * ARCHITECTURE: Two-port proxy with retry
 *   - Proxy starts IMMEDIATELY on Hostinger's PORT (prevents 503 timeout)
 *   - Strapi starts on PORT+1 in the background (takes 30-60 sec)
 *   - Proxy retries connection to Strapi every 2 seconds until it's ready
 */

const http = require('http');
const path = require('path');

const appDir = __dirname;
const PROXY_PORT = parseInt(process.env.PORT || '1337', 10);
const STRAPI_PORT = PROXY_PORT + 1;

// Tell Strapi to use STRAPI_PORT (our proxy takes PROXY_PORT)
process.env.PORT = String(STRAPI_PORT);
process.env.HOST = '0.0.0.0';

let statusMessage = '⏳ Strapi is loading... please wait 60 seconds and refresh.';
let strapiReady = false;
let proxyErrorInfo = '';

console.log('[server.js] Proxy port:', PROXY_PORT, '| Strapi port:', STRAPI_PORT);

// ─── Proxy Server ───────────────────────────────────────────────────────────
const proxyServer = http.createServer((clientReq, clientRes) => {
    if (!strapiReady) {
        clientRes.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        clientRes.end(statusMessage + (proxyErrorInfo ? '\n\nLast error: ' + proxyErrorInfo : ''));
        return;
    }

    const options = {
        hostname: '127.0.0.1',
        port: STRAPI_PORT,
        path: clientReq.url,
        method: clientReq.method,
        headers: {
            ...clientReq.headers,
            host: '127.0.0.1:' + STRAPI_PORT,
        },
    };

    const proxyReq = http.request(options, (proxyRes) => {
        // Rewrite Location headers so redirects point to the public domain
        const headers = { ...proxyRes.headers };
        if (headers.location) {
            headers.location = headers.location.replace(
                /http:\/\/127\.0\.0\.1:\d+/g,
                'https://api.marathibusinesstribe.com'
            );
        }
        clientRes.writeHead(proxyRes.statusCode, headers);
        proxyRes.pipe(clientRes, { end: true });
    });

    proxyReq.on('error', (err) => {
        proxyErrorInfo = err.message + ' (code: ' + err.code + ')';
        strapiReady = false; // Strapi may have crashed
        statusMessage = '⚠️ Strapi stopped responding. Error: ' + proxyErrorInfo;
        clientRes.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        clientRes.end(statusMessage);
    });

    // Pipe request body for POST/PUT/PATCH
    if (!['GET', 'HEAD'].includes(clientReq.method)) {
        clientReq.pipe(proxyReq, { end: true });
    } else {
        proxyReq.end();
    }
});

// Start proxy IMMEDIATELY — Hostinger sees a listener right away (no timeout)
proxyServer.listen(PROXY_PORT, '0.0.0.0', () => {
    console.log('[server.js] Proxy listening on port', PROXY_PORT);
    loadStrapi();
});

// ─── Error Guards ────────────────────────────────────────────────────────────
process.on('unhandledRejection', (reason) => {
    const msg = reason && reason.stack ? reason.stack : String(reason);
    statusMessage = '❌ Async Error:\n\n' + msg;
    console.error('[unhandledRejection]', msg);
});

process.on('uncaughtException', (err) => {
    const msg = err && err.stack ? err.stack : String(err);
    statusMessage = '❌ Exception:\n\n' + msg;
    console.error('[uncaughtException]', msg);
});

process.exit = (code) => {
    statusMessage =
        '❌ Strapi called process.exit(' + code + ').\n\n' +
        'Check DATABASE env vars on Hostinger:\n' +
        '  DATABASE_CLIENT=mysql\n' +
        '  DATABASE_HOST=localhost\n' +
        '  DATABASE_PORT=3306\n' +
        '  DATABASE_NAME=u743540205_strapi\n' +
        '  DATABASE_USERNAME=u743540205_strapi\n' +
        '  DATABASE_PASSWORD=<your-password>\n' +
        '  NODE_ENV=production';
    console.error('[BLOCKED process.exit(' + code + ')]');
};

// ─── Load Strapi on STRAPI_PORT ──────────────────────────────────────────────
async function loadStrapi() {
    try {
        const strapiPkg = require(path.join(appDir, 'node_modules', '@strapi', 'strapi'));
        const createStrapi = strapiPkg.createStrapi;

        if (typeof createStrapi !== 'function') {
            statusMessage = '❌ createStrapi is not a function. Keys: ' + Object.keys(strapiPkg).join(', ');
            return;
        }

        console.log('[server.js] Starting Strapi on port', STRAPI_PORT, '...');
        await createStrapi({ appDir, distDir: path.join(appDir, 'dist') }).start();

        strapiReady = true;
        statusMessage = '✅ Strapi is running on internal port ' + STRAPI_PORT;
        console.log('[server.js] Strapi ready on port', STRAPI_PORT);

    } catch (err) {
        statusMessage = '❌ Strapi startup failed:\n\n' + (err && err.stack ? err.stack : String(err));
        console.error('[loadStrapi]', statusMessage);
    }
}
