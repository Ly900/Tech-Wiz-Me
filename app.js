var express = require("express");
var app = express();

// Automatically goes to the public folder and uses the index.html there.
app.use(express.static(__dirname + "/public"));

app.listen(3000, function(){
console.log("Server running on port 3000");
});
