var express = require("express");
var app = express();

// Automatically goes to the public folder and uses the index.html there.
app.use(express.static(__dirname + "/public"));

// Sends the problems array as json data if a request is made to this path
app.get("/problems", function(req, res) {
  console.log("Server received a get request");

  problem1 = {
    question: "What is a variable?",
    answer: "A variable is a container that stores information.",
    resource_links:  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types"
  };

  problem2 = {
    question: "How would you organize your Javascript code?",
    answer: "",
    resource_links: "http://read.humanjavascript.com/ch04-organizing-your-code.html"
  };

  problem3 = {
    question: "What is an IIFE and why is it used?",
    answer: "",
    resource_links:
      ["http://stackoverflow.com/questions/8228281/what-is-the-function-construct-in-javascript", "http://lucybain.com/blog/2014/immediately-invoked-function-expression/"]
  };
  var problems = [problem1, problem2, problem3];
  res.json(problems);

}); //ends app.get



app.listen(3000, function(){
console.log("Server running on port 3000");
});
