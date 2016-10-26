var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/futuroapp';

MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);
    //var collection = db.collection('proveedores');
    db.collection('proveedores').find({})
      .each(function(err, result) {
      if (err) {
        console.log(err);
      } else  {
        console.log('Found:', result);
      } 
    });

    db.close();
  }
});
