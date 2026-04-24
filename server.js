/**
 * server.js — Hostinger Entry Point
 * Proxy on Hostinger's PORT + Strapi child on PORT+1 with auto-restart.
 */

const http = require('http');
const path = require('path');
const fs = require('fs');
const { fork } = require('child_process');

const appDir = __dirname;
const PROXY_PORT = parseInt(process.env.PORT || '1337', 10);
const STRAPI_PORT = PROXY_PORT + 1;
const LOG_FILE = path.join(appDir, 'strapi-error.log');

let strapiReady = false;
let statusMessage = '⏳ Strapi is starting... please wait 60 seconds and refresh.';
let restartCount = 0;

console.log('[server.js] Proxy:', PROXY_PORT, '| Strapi:', STRAPI_PORT);

function readLog() {
    try { return fs.readFileSync(LOG_FILE, 'utf8'); } catch (e) { return '(no log file yet)'; }
}

// ─── Proxy Server ─────────────────────────────────────────────────────────────
const proxyServer = http.createServer((clientReq, clientRes) => {
    if (!strapiReady) {
        const logContent = readLog();
        clientRes.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        clientRes.end(
            statusMessage + (restartCount > 0 ? ' [restarts: ' + restartCount + ']' : '') +
            '\n\n=== strapi-error.log ===\n' + logContent
        );
        return;
    }

    const options = {
        hostname: '127.0.0.1',
        port: STRAPI_PORT,
        path: clientReq.url,
        method: clientReq.method,
        headers: { ...clientReq.headers, host: '127.0.0.1:' + STRAPI_PORT },
    };

    const proxyReq = http.request(options, (proxyRes) => {
        const headers = { ...proxyRes.headers };
        if (headers.location) {
            headers.location = headers.location
                .replace(/http:\/\/127\.0\.0\.1:\d+/g, 'https://api.marathibusinesstribe.com')
                .replace(/http:\/\/localhost:\d+/g, 'https://api.marathibusinesstribe.com');
        }
        clientRes.writeHead(proxyRes.statusCode, headers);
        proxyRes.pipe(clientRes, { end: true });
    });

    proxyReq.on('error', (err) => {
        strapiReady = false;
        statusMessage = '⚠️ Proxy error: ' + err.message + ' — restarting Strapi in 10s...';
        clientRes.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        clientRes.end(statusMessage + '\n\n=== strapi-error.log ===\n' + readLog());
    });

    if (!['GET', 'HEAD'].includes(clientReq.method)) {
        clientReq.pipe(proxyReq, { end: true });
    } else {
        proxyReq.end();
    }
});

proxyServer.listen(PROXY_PORT, '0.0.0.0', () => {
    console.log('[server.js] Proxy listening on', PROXY_PORT);
    startWorker();
});

// ─── Error guards for main process ──────────────────────────────────────────
process.on('uncaughtException', (err) => console.error('[main uncaughtException]', err));
process.on('unhandledRejection', (r) => console.error('[main unhandledRejection]', r));

// ─── Worker Manager ───────────────────────────────────────────────────────────
function startWorker() {
    const env = {
        ...process.env,
        PORT: String(STRAPI_PORT),
        HOST: '0.0.0.0',
        NODE_ENV: process.env.NODE_ENV || 'production',
    };

    const worker = fork(path.join(appDir, 'strapi-runner.js'), [], {
        env,
        silent: true,
    });

    worker.stdout.on('data', (d) => process.stdout.write(d));
    worker.stderr.on('data', (d) => process.stderr.write(d));

    worker.on('message', (msg) => {
        if (msg.type === 'ready') {
            strapiReady = true;
            statusMessage = '✅ Strapi is running.';
            console.log('[server.js] Strapi ready');
        }
    });

    worker.on('exit', (code, signal) => {
        strapiReady = false;
        restartCount++;
        const reason = signal || ('code ' + code);
        statusMessage = '⏳ Strapi stopped (' + reason + '). Restarting in 60s... [attempt ' + restartCount + ']';
        console.log('[server.js] Worker exited:', reason, '| Restart in 60s');
        // 60 second delay to avoid rapid restart loop
        setTimeout(startWorker, 60000);
    });

    worker.on('error', (err) => {
        statusMessage = '❌ Could not fork worker: ' + err.message;
        console.error('[server.js] Fork error:', err);
    });
}
