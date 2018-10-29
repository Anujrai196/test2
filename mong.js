var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://<dbuser>:<dbpassword>@ds239703.mlab.com:39703/anuj";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});