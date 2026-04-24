/**
 * strapi-runner.js — Runs Strapi. All output goes to stdout/stderr (captured by server.js).
 */

const path = require('path');
const appDir = path.dirname(__filename);

console.log('[runner] Starting on port', process.env.PORT, '| appDir:', appDir);

// Check required env vars
const required = [
    'DATABASE_CLIENT', 'DATABASE_HOST', 'DATABASE_PORT',
    'DATABASE_NAME', 'DATABASE_USERNAME', 'DATABASE_PASSWORD',
    'APP_KEYS', 'ADMIN_JWT_SECRET', 'JWT_SECRET',
];
const missing = required.filter(v => !process.env[v]);
if (missing.length > 0) {
    console.error('[runner] MISSING ENV VARS:', missing.join(', '));
    process.exit(1);
}
console.log('[runner] Env check OK');

// Test MySQL first
const mysql = require(path.join(appDir, 'node_modules', 'mysql2', 'promise'));
mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT || '3306', 10),
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    connectTimeout: 10000,
}).then(conn => {
    return conn.ping().then(() => conn.end());
}).then(() => {
    console.log('[runner] MySQL OK, loading Strapi...');
    return startStrapi();
}).catch(err => {
    console.error('[runner] MySQL FAILED:', err.message, '| code:', err.code);
    process.exit(1);
});

async function startStrapi() {
    try {
        const { createStrapi } = require(path.join(appDir, 'node_modules', '@strapi', 'strapi'));
        await createStrapi({
            appDir: appDir,
            distDir: path.join(appDir, 'dist'),
        }).start();
        console.log('[runner] Strapi started on port', process.env.PORT);
    } catch (err) {
        console.error('[runner] Strapi failed:', err.stack || err.message);
        process.exit(1);
    }
}
