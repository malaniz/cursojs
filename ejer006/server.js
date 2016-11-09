var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/test1';
var app = express();
var db = null;

app.use(bodyParser.json())

MongoClient.connect(url, function (err, _db) {
  if (err) {
    console.log('Unable to connect. Error:', err);
    return;
  } 
  console.log("bd conectada");
  db = _db;
});


app.get('/facturas/lst', function (req, res) {
  db.collection('facturas')
    .find().toArray( function(err, result) {
      if (err) {
        res.status(500).send({error: true, trace: err});
        return;
      }
      res.send({data: result});
    });
});


app.get('/facturas/get', function (req, res) {
  if (!('id' in req.query)) {
    res.status(500).send({error: true, trace: "necesita id"});
    return ;
  }
  db.collection('facturas')
    .findOne({
      _id: new mongodb.ObjectID(req.query.id)
    }, function(err, result) {
      if (err) {
        res.status(500).send({error: true, trace: err});
        return;
      }
      res.send({data: result});
    });
});

// completar delete, update, put o create

app.listen(3010, function () {
  console.log('Listen on http://localhost:3010!');
});


