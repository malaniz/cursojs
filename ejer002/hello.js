var http = require('http');

var hostname = '127.0.0.1';
var port = 3000;


var router = {
  'clientes' : htmlclientes,
  'productos' : htmlproductos
};

function htmlclientes(req, res) {
  res.end('estoy en clientes');
}
function htmlproductos(req, res) {
  res.end('estoy en productos');
}


var server = http.createServer(function (req, res) {

  var url = req.url;
  console.log(url, typeof url);
  url = url.substring(1);
  if (url in router) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    router[url](req, res);
  } else {
    res.statusCode = 404;
    res.end('NOT FOUND');
  }
});

server.listen(port, hostname, function() {
  console.log('Server running at ' + hostname + ':' + port);

});
