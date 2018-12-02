const express = require('express');
const http = require('http');
const path = require('path');
let app = express();

// app.use(express.static(path.join(__dirname, 'build')));

// use(connect.static(__dirname + '/public'));

app.use(express.static('public'));

const port = process.env.PORT || '8080';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));
