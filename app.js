// Express' back-end framework.

var express = require("express");
var app = express();

// A node.js module for mongodb, that emulates the official mongodb API as much as possible.
var mongojs = require("mongojs");
var bodyParser = require("body-parser");

// Local Usage: var db = mongojs(connectionString, [collections])
// Usage example: var db = mongojs('mydb', ['mycollection'])
// var db = mongojs("techwizme", ["techwizme"])

// var db = mongojs("mongodb://ly900:foo@ds045785.mongolab.com:45785/techwizme", ['techwizme']);

var db = mongojs("mongodb://" + (process.env.MONGODB_URL || "localhost/techwizme"), ['techwizme']);

// mongojs.connect("mongodb://" + (process.env.MONGODB_URL || "localhost/techwizme"));

// Put below into command line to match with what's up there ^
// heroku config:add MONGODB_URL=ly900:foo@@ds045785.mongolab.com:45785/techwizme

// Allows us to use static files in the public directory like CSS/JS
// Automatically goes to the public folder and uses the index.html there.
app.use(express.static(__dirname + "/public"));

// bodyParser is for PUT and DELETE requests; without this, when a post request is made to the server, the server receives it as undefined (req.body = undefined);
app.use(bodyParser.json());

// Sends the problems array as json data if a request is made to this path
app.get("/problems", function(req, res) {
  console.log("Server received a get request");
  db.techwizme.find(function(err, docs) {
    console.log(docs);
    res.json(docs);
    console.log("Server sent json data");
  });
}); //ends app.get

app.post("/problems", function(req, res) {
  console.log("Server received a post request");
  console.log(req.body);
  db.techwizme.insert({question: req.body.question, resource_links: req.body.resource_links}, function(err, doc){
    // this is the document it inserted into the collection and now has an ID.
    console.log(doc);
    // sends the doc back to the controller
    res.json(doc);
  }); // ends insert callback function
}); // ends app.post

app.delete("/problems/:id", function(req, res) {
  console.log("Server received a delete request");
  console.log(req.params.id)
  var id = req.params.id;
  db.techwizme.remove({"_id": mongojs.ObjectId(id)}, function(err, doc) {
    res.json(doc);
    console.log("Server sent data back to controller");
  });
});

app.put ("/problems/:id", function(req, res) {
  console.log("Server received a put request");
  var id = req.params.id;
  db.techwizme.findAndModify({query:
    {_id: mongojs.ObjectId(id)},
    update: {$set: {question: req.body.question, resource_links: req.body.resource_links}},
    new: true}, function(err, doc) {
      res.json(doc);
  }); // ends query and findAndModify??
});

app.listen(process.env.PORT || 3000, function(){
console.log("Server running on port 3000");
});
