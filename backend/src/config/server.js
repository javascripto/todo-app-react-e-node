const express = require('express');
const bodyParser = require('body-parser');

const allowCors = require('./cors');

const server = express();
const PORT = process.env.PORT || 3003;

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);

server.listen(PORT, function() {
  console.log(`BACKEND is running on port ${PORT}`);
});

module.exports = server;
