/**
 * server.js — Hostinger Entry Point for Strapi v5
 * Uses spawn() + /tmp logging + port polling (most compatible approach)
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const appDir = __dirname;
const PROXY_PORT = parseInt(process.env.PORT || '1337', 10);
const STRAPI_PORT = PROXY_PORT + 1;
const LOG_FILE = '/tmp/strapi-error.log';

let strapiReady = false;
let statusMessage = '⏳ Strapi is starting... please wait 60 seconds and refresh.';
let restartCount = 0;
let workerProcess = null;

log('server.js started | Proxy:' + PROXY_PORT + ' | Strapi:' + STRAPI_PORT);

function log(msg) {
    const line = '[' + new Date().toISOString() + '] ' + msg;
    console.log(line);
    try { fs.appendFileSync(LOG_FILE, line + '\n'); } catch (e) {}
}

function readLog() {
    try { return fs.readFileSync(LOG_FILE, 'utf8'); } catch (e) { return '(log unavailable: ' + e.message + ')'; }
}

// ─── Proxy Server ─────────────────────────────────────────────────────────────
const proxyServer = http.createServer((clientReq, clientRes) => {
    if (!strapiReady) {
        clientRes.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        clientRes.end(
            statusMessage + (restartCount > 0 ? ' [restarts: ' + restartCount + ']' : '') +
            '\n\n=== /tmp/strapi-error.log ===\n' + readLog()
        );
        return;
    }

    const opts = {
        hostname: '127.0.0.1',
        port: STRAPI_PORT,
        path: clientReq.url,
        method: clientReq.method,
        headers: { ...clientReq.headers, host: '127.0.0.1:' + STRAPI_PORT },
    };

    const proxyReq = http.request(opts, (proxyRes) => {
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
        statusMessage = '⚠️ Strapi not responding (' + err.code + '). Checking...';
        clientRes.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        clientRes.end(statusMessage + '\n\n=== /tmp/strapi-error.log ===\n' + readLog());
        checkStrapiAlive();
    });

    if (!['GET', 'HEAD'].includes(clientReq.method)) {
        clientReq.pipe(proxyReq, { end: true });
    } else {
        proxyReq.end();
    }
});

proxyServer.listen(PROXY_PORT, '0.0.0.0', () => {
    log('Proxy listening on ' + PROXY_PORT);
    startStrapi();
});

process.on('uncaughtException', (err) => log('main uncaughtException: ' + err.message));
process.on('unhandledRejection', (r) => log('main unhandledRejection: ' + r));

// ─── Start Strapi via spawn ──────────────────────────────────────────────────
function startStrapi() {
    // Clear old log on fresh start
    try { fs.writeFileSync(LOG_FILE, '=== Strapi start attempt at ' + new Date().toISOString() + ' ===\n'); } catch (e) {}

    const env = {
        ...process.env,
        PORT: String(STRAPI_PORT),
        HOST: '0.0.0.0',
        NODE_ENV: process.env.NODE_ENV || 'production',
    };

    log('Spawning Strapi on port ' + STRAPI_PORT);

    workerProcess = spawn(process.execPath, [path.join(appDir, 'strapi-runner.js')], {
        env,
        cwd: appDir,
        stdio: ['ignore', 'pipe', 'pipe'],
    });

    workerProcess.stdout.on('data', (d) => {
        const msg = d.toString().trim();
        if (msg) log('[strapi-out] ' + msg);
    });

    workerProcess.stderr.on('data', (d) => {
        const msg = d.toString().trim();
        if (msg) log('[strapi-err] ' + msg);
    });

    workerProcess.on('error', (err) => {
        log('Failed to spawn Strapi: ' + err.message);
        statusMessage = '❌ Could not start Strapi: ' + err.message;
    });

    workerProcess.on('exit', (code, signal) => {
        strapiReady = false;
        restartCount++;
        const reason = signal ? 'signal ' + signal : 'code ' + code;
        log('Strapi exited: ' + reason + ' | restart #' + restartCount + ' in 60s');
        statusMessage = '⏳ Strapi stopped (' + reason + '). Restart #' + restartCount + ' in 60s...';
        setTimeout(startStrapi, 60000);
    });

    // Poll for Strapi readiness (instead of IPC)
    setTimeout(pollStrapiReady, 10000);
}

// ─── Poll to check if Strapi is actually listening ───────────────────────────
function pollStrapiReady() {
    if (strapiReady) return;
    if (!workerProcess || workerProcess.killed) return;

    const req = http.request(
        { hostname: '127.0.0.1', port: STRAPI_PORT, path: '/', method: 'HEAD', timeout: 5000 },
        (res) => {
            strapiReady = true;
            statusMessage = '✅ Strapi is running!';
            log('Strapi is ready on port ' + STRAPI_PORT);
        }
    );
    req.on('error', () => {
        // Not ready yet — try again in 5 seconds
        setTimeout(pollStrapiReady, 5000);
    });
    req.on('timeout', () => {
        req.destroy();
        setTimeout(pollStrapiReady, 5000);
    });
    req.end();
}

// ─── Check if Strapi is still alive after a proxy error ─────────────────────
function checkStrapiAlive() {
    setTimeout(pollStrapiReady, 2000);
}
