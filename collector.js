var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://<dbuser>:<dbpassword>@ds239703.mlab.com:39703/anuj";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("form", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});