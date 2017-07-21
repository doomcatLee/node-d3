
var port = process.env.PORT || 3000;

var express = require('express');

var http = require('http');
var path = require('path')

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendfile('./public/index.html');
});


app.listen(port);
