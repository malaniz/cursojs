var http = require('http');

var hostname = '127.0.0.1';
var port = 4000;

var server = http.createServer(function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hola Mundo</h1>');
});

server.listen(port, hostname, function() {
  console.log('El servidor se está ejecutando en http://' + hostname + ':' + port);
});
