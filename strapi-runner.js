/**
 * strapi-runner.js - Runs Strapi in a child process.
 * Captures ALL errors (including process.exit calls) and reports to parent.
 */

const path = require('path');
const appDir = path.dirname(__filename);

// ── Intercept process.exit FIRST before anything else loads ─────────────────
const _realExit = process.exit.bind(process);
process.exit = (code) => {
    // Send the captured error to parent before exiting
    const msg = 'Strapi called process.exit(' + code + ').\n' +
        'Last captured stderr is above in console.\n' +
        'Most common causes:\n' +
        '  1. Missing env var (APP_KEYS, ADMIN_JWT_SECRET, etc.)\n' +
        '  2. MySQL connection refused (wrong host/password)\n' +
        '  3. Out of memory';
    try { process.send({ type: 'error', message: msg }); } catch(e) {}
    setTimeout(() => _realExit(code || 1), 200);
};

process.on('uncaughtException', (err) => {
    const msg = 'uncaughtException: ' + (err && err.stack ? err.stack : String(err));
    console.error('[strapi-runner]', msg);
    try { process.send({ type: 'error', message: msg }); } catch(e) {}
    _realExit(1);
});

process.on('unhandledRejection', (reason) => {
    const msg = 'unhandledRejection: ' + (reason && reason.stack ? reason.stack : String(reason));
    console.error('[strapi-runner]', msg);
    try { process.send({ type: 'error', message: msg }); } catch(e) {}
    _realExit(1);
});

// ── Log all env vars (redacted) so we can verify they exist ─────────────────
const requiredEnvVars = [
    'NODE_ENV', 'PORT', 'HOST',
    'DATABASE_CLIENT', 'DATABASE_HOST', 'DATABASE_PORT',
    'DATABASE_NAME', 'DATABASE_USERNAME', 'DATABASE_PASSWORD',
    'APP_KEYS', 'API_TOKEN_SALT', 'ADMIN_JWT_SECRET',
    'TRANSFER_TOKEN_SALT', 'JWT_SECRET',
];

const missingVars = requiredEnvVars.filter(v => !process.env[v]);
if (missingVars.length > 0) {
    const msg = 'MISSING REQUIRED ENV VARS: ' + missingVars.join(', ') +
        '\nPlease add these in Hostinger > Node.js App > Environment Variables';
    console.error('[strapi-runner]', msg);
    try { process.send({ type: 'error', message: msg }); } catch(e) {}
    _realExit(1);
}

console.log('[strapi-runner] Env check passed. Starting Strapi on port', process.env.PORT);

// ── Start Strapi ─────────────────────────────────────────────────────────────
async function run() {
    try {
        const { createStrapi } = require(path.join(appDir, 'node_modules', '@strapi', 'strapi'));
        await createStrapi({
            appDir: appDir,
            distDir: path.join(appDir, 'dist'),
        }).start();
        process.send({ type: 'ready', port: process.env.PORT });
        console.log('[strapi-runner] Strapi started on port', process.env.PORT);
    } catch (err) {
        const msg = 'Strapi .start() threw: ' + (err && err.stack ? err.stack : String(err));
        console.error('[strapi-runner]', msg);
        try { process.send({ type: 'error', message: msg }); } catch(e) {}
        _realExit(1);
    }
}

run();
