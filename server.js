const fs = require('fs');
const path = require('path');

process.on('uncaughtException', (err) => {
    fs.writeFileSync(path.join(__dirname, 'crash.log'), err.toString() + '\n' + err.stack);
});

try {
    const { createStrapi } = require('@strapi/strapi');
    createStrapi({ appDir: __dirname, distDir: path.join(__dirname, 'dist') })
      .start()
      .catch(err => {
          fs.writeFileSync(path.join(__dirname, 'crash-promise.log'), err.toString() + '\n' + err.stack);
      });
} catch (error) {
    fs.writeFileSync(path.join(__dirname, 'crash-sync.log'), error.toString() + '\n' + error.stack);
}
