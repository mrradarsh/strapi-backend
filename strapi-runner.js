const path = require('path');
const fs = require('fs');

const appDir = path.dirname(__filename);
const SOCK = process.env.STRAPI_SOCK || '/tmp/strapi.sock';

console.log('[runner] appDir:', appDir, '| socket:', SOCK);

// Check env vars
const missing = ['DATABASE_CLIENT','DATABASE_HOST','DATABASE_PORT','DATABASE_NAME','DATABASE_USERNAME','DATABASE_PASSWORD','APP_KEYS','ADMIN_JWT_SECRET','JWT_SECRET'].filter(v => !process.env[v]);
if (missing.length) { console.error('[runner] MISSING:', missing.join(',')); process.exit(1); }

// Test MySQL
const mysql = require(path.join(appDir,'node_modules','mysql2','promise'));
mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT||'3306',10),
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    connectTimeout: 10000
}).then(c => c.ping().then(() => c.end())).then(async () => {
    console.log('[runner] MySQL OK');
    const { createStrapi } = require(path.join(appDir,'node_modules','@strapi','strapi'));
    const strapi = createStrapi({ appDir, distDir: path.join(appDir,'dist') });

    // Patch the RAW httpServer.listen so all Strapi setup (admin panel, routes) still runs
    // We only redirect the TCP port binding to a UNIX socket
    const httpServer = strapi.server.httpServer;
    const origListen = httpServer.listen.bind(httpServer);
    httpServer.listen = function(port, host, cb) {
        try { fs.unlinkSync(SOCK); } catch(e){}
        console.log('[runner] Redirecting listen to UNIX socket:', SOCK, '(was port:', port + ')');
        return origListen(SOCK, cb);
    };

    await strapi.start();
    try { fs.chmodSync(SOCK, '777'); } catch(e){}
    console.log('[runner] READY');

}).catch(err => {
    console.error('[runner] FAILED:', err.message);
    process.exit(1);
});
