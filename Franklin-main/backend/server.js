var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://Guillermo:080417@cluster0.f65jh8x.mongodb.net/Neptune";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database connected!");
  db.close();
});