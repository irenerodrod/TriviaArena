const express = require('express');
const open = require('open');
const path = require('path');
const app = express();
const port = process.env.PORT || 0;

app.use(express.static(path.join(__dirname, '../')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

const server = app.listen(port, () => {
  const actualPort = server.address().port;
  const url = `http://localhost:${actualPort}/`;
  console.log(`Server running at ${url}`);
  open(url);
});
