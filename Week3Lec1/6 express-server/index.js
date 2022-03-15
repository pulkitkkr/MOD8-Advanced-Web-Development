var express = require('express');

var app = express();

app.get('/hello', function (req, res) {
  res.send('Hello World')
})

app.get('/bye', function (req, res) {
  res.send('bye')
})

app.listen(8081)
