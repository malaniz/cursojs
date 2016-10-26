var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var events = require('events');
var emitter = new events.EventEmitter();
var url = 'mongodb://localhost:27017/prueba';

function connectDB() {
  MongoClient.connect(url, function (err, db) {
    if (err) {
      console.log('Unable to connect.', err);
    } else {
      emitter.emit('db.connected');
    }
  });
}
function insertDB() {
  console.log('insertar');
}
emitter.on('db.connect', connectDB);
emitter.on('db.connected', insertDB);
emitter.emit('db.connect');


