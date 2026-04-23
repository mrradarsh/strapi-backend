/**
 * Hostinger Production Server for Strapi v5
 * 
 * Architecture: Two-port proxy
 *   - PROXY_PORT (Hostinger's PORT) → always open, proxies to Strapi
 *   - STRAPI_PORT (PROXY_PORT + 1)  → Strapi listens here internally
 * 
 * This prevents any gap where nothing is listening on Hostinger's port,
 * which is the root cause of the 503 "Service Unavailable" error.
 */

const http = require('http');
const path = require('path');

const appDir = __dirname;
const PROXY_PORT = parseInt(process.env.PORT || '1337', 10);
const STRAPI_PORT = PROXY_PORT + 1; // e.g. if Hostinger gives 1337, Strapi uses 1338

// Tell Strapi to use STRAPI_PORT (NOT Hostinger's port, which our proxy already holds)
process.env.PORT = String(STRAPI_PORT);
process.env.HOST = '0.0.0.0';

let statusMessage = '⏳ Strapi is starting... please refresh in 30-60 seconds.';
console.log('Proxy port:', PROXY_PORT, '| Strapi internal port:', STRAPI_PORT);

// ─── Proxy Server (always alive on Hostinger's PORT) ───────────────────────
const proxyServer = http.createServer((clientReq, clientRes) => {
    const proxyOptions = {
        hostname: '127.0.0.1',
        port: STRAPI_PORT,
        path: clientReq.url,
        method: clientReq.method,
        headers: { ...clientReq.headers, host: '127.0.0.1:' + STRAPI_PORT },
    };

    const proxyReq = http.request(proxyOptions, (proxyRes) => {
        clientRes.writeHead(proxyRes.statusCode, proxyRes.headers);
        proxyRes.pipe(clientRes, { end: true });
    });

    proxyReq.on('error', () => {
        // Strapi not ready yet, or crashed — show status
        clientRes.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        clientRes.end(statusMessage);
    });

    if (clientReq.method !== 'GET' && clientReq.method !== 'HEAD') {
        clientReq.pipe(proxyReq, { end: true });
    } else {
        proxyReq.end();
    }
});

// Handle WebSocket upgrades (needed for Strapi admin panel)
proxyServer.on('upgrade', (req, socket, head) => {
    const net = require('net');
    const upstream = net.connect(STRAPI_PORT, '127.0.0.1', () => {
        upstream.write(
            'GET ' + req.url + ' HTTP/1.1\r\n' +
            'Host: 127.0.0.1:' + STRAPI_PORT + '\r\n' +
            'Upgrade: websocket\r\n' +
            'Connection: Upgrade\r\n' +
            (req.headers['sec-websocket-key'] ? 'Sec-WebSocket-Key: ' + req.headers['sec-websocket-key'] + '\r\n' : '') +
            (req.headers['sec-websocket-version'] ? 'Sec-WebSocket-Version: ' + req.headers['sec-websocket-version'] + '\r\n' : '') +
            '\r\n'
        );
    });
    socket.pipe(upstream).pipe(socket);
    upstream.on('error', () => socket.destroy());
    socket.on('error', () => upstream.destroy());
});

// Start proxy FIRST — immediately, before anything else
proxyServer.listen(PROXY_PORT, '0.0.0.0', () => {
    console.log('✅ Proxy server listening on port', PROXY_PORT);
    startStrapi(); // Only load Strapi after proxy is confirmed listening
});

// ─── Global error handlers (prevent process crash → 503) ───────────────────
process.on('unhandledRejection', (reason) => {
    const msg = reason && reason.stack ? reason.stack : String(reason);
    statusMessage = '❌ Strapi Async Error:\n\n' + msg;
    console.error('[unhandledRejection]', msg);
});

process.on('uncaughtException', (err) => {
    const msg = err && err.stack ? err.stack : String(err);
    statusMessage = '❌ Strapi Exception:\n\n' + msg;
    console.error('[uncaughtException]', msg);
});

// Intercept process.exit so our proxy server survives Strapi crashes
process.exit = (code) => {
    statusMessage =
        '❌ Strapi called process.exit(' + code + ').\n\n' +
        'This usually means a database connection failure.\n' +
        'Please verify these env vars on Hostinger:\n' +
        '  DATABASE_CLIENT=mysql\n' +
        '  DATABASE_HOST=localhost\n' +
        '  DATABASE_PORT=3306\n' +
        '  DATABASE_NAME=u743540205_strapi\n' +
        '  DATABASE_USERNAME=u743540205_strapi\n' +
        '  DATABASE_PASSWORD=<your password>\n' +
        '  NODE_ENV=production';
    console.error('[BLOCKED process.exit(' + code + ')]');
    // Intentionally NOT calling the real process.exit
};

// ─── Start Strapi on STRAPI_PORT ────────────────────────────────────────────
async function startStrapi() {
    try {
        const strapiModule = require(path.join(appDir, 'node_modules', '@strapi', 'strapi'));
        const createStrapi = strapiModule.createStrapi;

        if (typeof createStrapi !== 'function') {
            statusMessage =
                '❌ createStrapi is not a function.\n' +
                'Exported keys: ' + Object.keys(strapiModule).join(', ');
            return;
        }

        console.log('Loading Strapi on internal port', STRAPI_PORT, '...');
        await createStrapi({
            appDir: appDir,
            distDir: path.join(appDir, 'dist'),
        }).start();

        statusMessage = '✅ Strapi is running on internal port ' + STRAPI_PORT;
        console.log('✅ Strapi started on port', STRAPI_PORT);

    } catch (err) {
        statusMessage =
            '❌ Strapi startup failed:\n\n' +
            (err && err.stack ? err.stack : String(err));
        console.error('[startStrapi error]', statusMessage);
    }
}
