var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://<dbuser>:<dbpassword>@ds239703.mlab.com:39703/anuj";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "Anuj",Reg_no:"11506692", address: "lpu",contect_no:"9915121930" };
  dbo.collection("form").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});