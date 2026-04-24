const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const appDir = __dirname;
const PORT = parseInt(process.env.PORT || '1337', 10);
const SOCK = '/tmp/strapi.sock';
const LOG = '/tmp/strapi-error.log';

let ready = false, restarts = 0;
let status = '⏳ Starting Strapi... refresh in 90 seconds.';

try { fs.writeFileSync(LOG, '=== ' + new Date().toISOString() + ' ===\n'); } catch(e){}

function log(m) {
    const l = '[' + new Date().toISOString() + '] ' + m + '\n';
    process.stdout.write(l);
    try { fs.appendFileSync(LOG, l); } catch(e){}
}
function readLog() { try { return fs.readFileSync(LOG,'utf8'); } catch(e){ return e.message; } }

// Proxy: TCP PORT → UNIX socket
const proxy = http.createServer((req, res) => {
    if (!ready) {
        res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
        return res.end(status + '\n\n=== LOG ===\n' + readLog());
    }
    const p = http.request({ socketPath: SOCK, path: req.url, method: req.method, headers: req.headers }, (r) => {
        res.writeHead(r.statusCode, r.headers);
        r.pipe(res, {end:true});
    });
    p.on('error', (e) => {
        ready = false;
        status = '⚠️ Strapi error: ' + e.message;
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end(status);
    });
    if (!['GET','HEAD'].includes(req.method)) req.pipe(p,{end:true}); else p.end();
});

proxy.listen(PORT, '0.0.0.0', () => { log('Proxy on PORT ' + PORT); startWorker(); });
process.on('uncaughtException', e => log('ERR: ' + e.stack));
process.on('unhandledRejection', r => log('REJ: ' + r));

function startWorker() {
    try { fs.unlinkSync(SOCK); } catch(e){}
    ready = false;
    restarts++;
    status = '⏳ Strapi loading... (attempt ' + restarts + ') refresh in 90s.';
    log('Spawning strapi-runner (attempt ' + restarts + ')');

    const w = spawn(process.execPath, [path.join(appDir,'strapi-runner.js')], {
        env: { ...process.env, STRAPI_SOCK: SOCK, NODE_ENV: process.env.NODE_ENV||'production' },
        cwd: appDir,
        stdio: ['ignore','pipe','pipe']
    });
    w.stdout.on('data', d => { const m = d.toString().trim(); log('[out] ' + m); if (m.includes('READY')) { ready=true; status='✅ Strapi running!'; } });
    w.stderr.on('data', d => log('[err] ' + d.toString().trim()));
    w.on('error', e => { status='❌ Spawn failed: '+e.message; log(status); });
    w.on('exit', (c,s) => { ready=false; log('Worker exit: '+(s||c)+' | restart in 60s'); status='⏳ Restarting ('+restarts+')...'; setTimeout(startWorker,60000); });
}
