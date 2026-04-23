/**
 * server.js - Hostinger Entry Point
 *
 * ARCHITECTURE:
 *   - Proxy server starts IMMEDIATELY on Hostinger's PORT (no 503 timeout)
 *   - Strapi runs in a CHILD PROCESS on PORT+1
 *   - If Strapi crashes → child is auto-restarted after 5 seconds
 *   - During restart → proxy shows a loading message (not 503)
 */

const http = require('http');
const path = require('path');
const { fork } = require('child_process');

const PROXY_PORT = parseInt(process.env.PORT || '1337', 10);
const STRAPI_PORT = PROXY_PORT + 1;

let strapiReady = false;
let statusMessage = '⏳ Strapi is starting... please wait 60 seconds and refresh.';
let lastError = '';
let restartCount = 0;

console.log('[server.js] Proxy:', PROXY_PORT, '| Strapi:', STRAPI_PORT);

// ─── Proxy Server ────────────────────────────────────────────────────────────
const proxyServer = http.createServer((clientReq, clientRes) => {
    if (!strapiReady) {
        clientRes.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        clientRes.end(
            statusMessage +
            (lastError ? '\n\nLast error:\n' + lastError : '') +
            (restartCount > 0 ? '\n\nRestart count: ' + restartCount : '')
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
        // Rewrite Location headers to use public domain
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
        lastError = err.message + ' (code: ' + err.code + ')';
        strapiReady = false;
        statusMessage = '⚠️ Strapi not responding, will restart in 5 seconds...';
        clientRes.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        clientRes.end(statusMessage + '\n\nError: ' + lastError);
    });

    if (!['GET', 'HEAD'].includes(clientReq.method)) {
        clientReq.pipe(proxyReq, { end: true });
    } else {
        proxyReq.end();
    }
});

// Start proxy FIRST — binds immediately so Hostinger doesn't timeout
proxyServer.listen(PROXY_PORT, '0.0.0.0', () => {
    console.log('[server.js] Proxy listening on', PROXY_PORT);
    startStrapiWorker();
});

// ─── Strapi Worker Manager ───────────────────────────────────────────────────
function startStrapiWorker() {
    const env = {
        ...process.env,
        PORT: String(STRAPI_PORT),
        HOST: '0.0.0.0',
        NODE_ENV: process.env.NODE_ENV || 'production',
    };

    console.log('[server.js] Forking strapi-runner on port', STRAPI_PORT);

    const worker = fork(path.join(__dirname, 'strapi-runner.js'), [], {
        env,
        silent: true, // Capture stdout/stderr so we can show them in browser
    });

    // Pipe stdout to parent console
    worker.stdout.on('data', (data) => process.stdout.write(data));

    // Capture stderr — this contains the actual Strapi error
    worker.stderr.on('data', (data) => {
        const msg = data.toString();
        process.stderr.write(msg);
        // Accumulate stderr as lastError for display
        lastError = (lastError + '\n' + msg).slice(-2000); // keep last 2000 chars
    });

    worker.on('message', (msg) => {
        if (msg.type === 'ready') {
            strapiReady = true;
            statusMessage = '✅ Strapi is running.';
            lastError = '';
            console.log('[server.js] Strapi ready on port', STRAPI_PORT);
        }
        if (msg.type === 'error') {
            lastError = msg.message;
            statusMessage = '❌ Strapi error (check below)';
            console.error('[worker error]', msg.message);
        }
    });

    worker.on('exit', (code, signal) => {
        strapiReady = false;
        restartCount++;
        const reason = signal ? 'signal ' + signal : 'code ' + code;
        statusMessage = '⏳ Strapi stopped (' + reason + '). Restarting in 10s... (attempt ' + restartCount + ')';
        console.log('[server.js] Worker exited:', reason, '| Restarting in 10s...');

        // Auto-restart after 10 seconds
        setTimeout(startStrapiWorker, 10000);
    });

    worker.on('error', (err) => {
        lastError = err.message;
        statusMessage = '❌ Could not start Strapi worker: ' + err.message;
        console.error('[server.js] Worker spawn error:', err);
    });
}
