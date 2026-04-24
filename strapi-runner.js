/**
 * strapi-runner.js — Child process that runs Strapi.
 * All errors are written to strapi-error.log file (IPC may not work).
 */

const path = require('path');
const fs = require('fs');

const appDir = path.dirname(__filename);
const logFile = path.join(appDir, 'strapi-error.log');

function writeLog(msg) {
    const line = '[' + new Date().toISOString() + '] ' + msg + '\n';
    process.stderr.write(line);
    try {
        fs.appendFileSync(logFile, line);
    } catch (e) { /* ignore write errors */ }
    try { process.send({ type: 'error', message: msg }); } catch (e) {}
}

// Clear log on new start
try { fs.writeFileSync(logFile, '--- Strapi Runner Started: ' + new Date().toISOString() + ' ---\n'); } catch (e) {}

// ── Intercept process.exit ───────────────────────────────────────────────────
const _realExit = process.exit.bind(process);
process.exit = (code) => {
    writeLog('process.exit(' + code + ') was called — Strapi is shutting down.');
    setTimeout(() => _realExit(code || 1), 300);
};

process.on('uncaughtException', (err) => {
    writeLog('uncaughtException: ' + (err && err.stack ? err.stack : String(err)));
    _realExit(1);
});

process.on('unhandledRejection', (reason) => {
    writeLog('unhandledRejection: ' + (reason && reason.stack ? reason.stack : String(reason)));
    _realExit(1);
});

// ── Check required env vars ──────────────────────────────────────────────────
const required = [
    'DATABASE_CLIENT', 'DATABASE_HOST', 'DATABASE_PORT',
    'DATABASE_NAME', 'DATABASE_USERNAME', 'DATABASE_PASSWORD',
    'APP_KEYS', 'API_TOKEN_SALT', 'ADMIN_JWT_SECRET',
    'TRANSFER_TOKEN_SALT', 'JWT_SECRET',
];
const missing = required.filter(v => !process.env[v]);

if (missing.length > 0) {
    writeLog('MISSING ENV VARS: ' + missing.join(', '));
    _realExit(1);
}

writeLog('Env check OK. Testing MySQL connection...');

// ── Test MySQL before starting Strapi ─────────────────────────────────────────
async function testMySQL() {
    try {
        const mysql = require(path.join(appDir, 'node_modules', 'mysql2', 'promise'));
        const conn = await mysql.createConnection({
            host: process.env.DATABASE_HOST,
            port: parseInt(process.env.DATABASE_PORT || '3306', 10),
            database: process.env.DATABASE_NAME,
            user: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
            connectTimeout: 10000,
        });
        await conn.ping();
        await conn.end();
        writeLog('✅ MySQL connection OK!');
        return true;
    } catch (err) {
        writeLog('❌ MySQL connection FAILED: ' + err.message + ' (code: ' + err.code + ')');
        return false;
    }
}

// ── Start Strapi ─────────────────────────────────────────────────────────────
async function run() {
    const dbOk = await testMySQL();
    if (!dbOk) {
        writeLog('Aborting Strapi start due to MySQL failure. Check DATABASE_* env vars on Hostinger.');
        _realExit(1);
        return;
    }

    writeLog('Starting Strapi on port ' + process.env.PORT + '...');

        const { createStrapi } = require(path.join(appDir, 'node_modules', '@strapi', 'strapi'));
        await createStrapi({
            appDir: appDir,
            distDir: path.join(appDir, 'dist'),
        }).start();

        writeLog('Strapi started successfully on port ' + process.env.PORT);
        try { process.send({ type: 'ready' }); } catch (e) {}

    } catch (err) {
        writeLog('Strapi .start() failed: ' + (err && err.stack ? err.stack : String(err)));
        _realExit(1);
    }
}

run();
