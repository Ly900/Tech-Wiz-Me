var express = require("express");
var app = express();
var mongojs = require("mongojs");
var db = mongojs("techwizme", ["techwizme"])

// Automatically goes to the public folder and uses the index.html there.
app.use(express.static(__dirname + "/public"));

// Sends the problems array as json data if a request is made to this path
app.get("/problems", function(req, res) {
  console.log("Server received a get request");
  db.techwizme.find(function(err, docs) {
    console.log(docs);
    res.json(docs);
    console.log("Server sent json data");
  });
}); //ends app.get

app.listen(3000, function(){
console.log("Server running on port 3000");
});
