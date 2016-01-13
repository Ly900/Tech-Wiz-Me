var myApp = angular
  .module("techWizMe", [])
  .controller('AppCtrl', [
    '$scope',
    '$http',
    function($scope, $http) {
    console.log("Response from Angular controller");
    $scope.cardClass = "question-card-front";

    $scope.changeClass = function() {
      if ($scope.cardClass == "question-card-front") {
        $scope.cardClass = "question-card-back";
      } else {
        $scope.cardClass = "question-card-front";
      }
    }; //ends changeClass function

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

    problem4 = {
      question: "What is a variable?",
      answer: "A variable is a container that stores information.",
      resource_links:  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types"
    };

    problem5 = {
      question: "How would you organize your Javascript code?",
      answer: "",
      resource_links: "http://read.humanjavascript.com/ch04-organizing-your-code.html"
    };

    problem6 = {
      question: "What is an IIFE and why is it used?",
      answer: "",
      resource_links:
        ["http://stackoverflow.com/questions/8228281/what-is-the-function-construct-in-javascript", "http://lucybain.com/blog/2014/immediately-invoked-function-expression/"]
    };

    var problems = [problem1, problem2, problem3, problem4, problem5, problem6];
    $scope.problems = problems;





}]); // ends myApp module
