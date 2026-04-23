const http = require('http');
const fs = require('fs');
const path = require('path');

// Write a log immediately so we know server.js was executed
fs.writeFileSync(path.join(__dirname, 'execution-test.log'), 'Hostinger started server.js successfully at ' + new Date().toISOString());

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from Hostinger! If you see this, the 503 error is fixed and the Node.js server is routing correctly.');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    fs.writeFileSync(path.join(__dirname, 'listening-test.log'), 'Server is listening on port ' + PORT);
});
