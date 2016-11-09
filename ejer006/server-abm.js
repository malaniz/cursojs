var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/test1';
var db = null;

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var secret  = "hola";

app.use(bodyParser.json());
app.use('/api/', expressJwt({secret: secret}));
 

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') { 
    res.status(401).send({error: true, trace: 'invalid token...'});
  }
});

MongoClient.connect(url, function (err, _db) {
  if (err) {
    console.log('Unable to connect. Error:', err);
    return;
  } 
  console.log("bd conectada");
  db = _db;
});


/*
var logged  = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.status(401).send({eror: true, trace: "Wrong password / username"})
};
*/

app.post('/login', function(req, res) {
  if (!('credentials' in req.body)) {
    res.status(500).send({erro: true, trace: "bad request"});
    return;
  }
  db.collection('usuarios')
    .findOne(req.body.credentials, function(err, result) {
      if (err) {
        res.status(500).send({error: true, trace: err});
        return;
      }
      var token = jwt.sign(result, secret, { expiresIn: 60 * 5 });
      res.send({data: {token: token, id: result._id, username: result.username}});
    });
});
// abm
app.get('/api/:collection/list',  function (req, res) {
  db.collection(req.params.collection)
    .find().toArray( function(err, result) {
      if (err) {
        res.status(500).send({error: true, trace: err});
        return;
      }
      res.send({data: result});
    });
});
app.get('/api/:collection/get/:id', function (req, res) {
  db.collection(req.params.collection)
    .findOne({
      _id: new mongodb.ObjectID(req.params.id)
    }, function(err, result) {
      if (err) {
        res.status(500).send({error: true, trace: err});
        return;
      }
      res.send({data: result});
    });
});
app.post('/api/:collection/put', function (req, res) {
  db.collection(req.params.collection)
    .insert(req.body, function(err, result) {
       if (err) {
        res.status(500).send({error: true, trace: err});
        return;
      }
      res.send({data:result.ops[0]});
    });
});
app.get('/api/:collection/del/:id', function (req, res) {
  db.collection(req.params.collection)
    .deleteOne({ 
      _id: new mongodb.ObjectID(req.params.id) 
    }, function(err, result) {
       if (err) {
        res.status(500).send({error: true, trace: err});
        return;
      }
      res.send({data: result});
    });

});
app.post('/api/:collection/upd/:id', function (req, res) {
  db.collection(req.params.collection)
    .update({ 
      _id: new mongodb.ObjectID(req.params.id) 
    }, {$set: req.body}, function(err, result) {
       if (err) {
        res.status(500).send({error: true, trace: err});
        return;
      }
      res.send({data:result});
    });
});


app.listen(3010, function () {
  console.log('Listen on http://localhost:3010!');
});
