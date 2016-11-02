var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json())

// abm
app.get('/clientes/list', function (req, res) {
  res.send('Hello World!');
});
app.get('/clientes/get/:id', function (req, res) {
  res.send('Hello World!');
});
app.post('/clientes/put', function (req, res) {
  res.send('Hello World!');
});
app.get('/clientes/del/:id', function (req, res) {
  res.send('Hello World!');
});
app.post('/clientes/upd/:id', function (req, res) {
  res.send('Hello World!');
});


app.listen(3010, function () {
  console.log('Listen on http://localhost:3010!');
});
