const express = require('express');
const http = require('http');
const path = require('node:path');
const { fileURLToPath } = require('node:url');

const httpApp = express();
httpApp.use(
  express.static(path.join(__dirname, '../docs'), {
    fallthrough: true,
    index: false
  })
);

httpApp.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../docs/index.html'));
});

const httpServer = http.createServer(httpApp);
httpServer.listen(80);
console.log('HTTP server listening on port: ' + 80);
