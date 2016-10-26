var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/test1';
var http = require('http');
var basedatos = null;


var server = http.createServer(function (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) {
      console.log('Unable to connect. Error:', err);
    } else {
      db.collection('facturas')
        .find().toArray( function(err, result) {
          console.log("server ok");
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          if (err) {
            console.log(err);
            res.end(err);
          } else  {
            res.end(JSON.stringify(result));
          } 
        });

      console.log("bd conectada");
    }
  });


});

server.listen(8080, 'localhost', function() {
  console.log("servidor corriendo");
});


