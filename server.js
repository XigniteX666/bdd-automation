const express = require('express');
const httpShutdown = require('http-shutdown');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// viewed at http://localhost:8080
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const server = app.listen(666, () => {
  console.log(`Web is listening on port 666`);
});

server.host = `http://localhost:666`;