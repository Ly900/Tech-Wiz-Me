var myApp = angular
  .module("techWizMe", [])
  .controller('AppCtrl', [
    '$scope',
    '$http',
    function($scope, $http) {
      $scope.showUpdateButton = false;
      console.log("Response from Angular controller");
      var refresh = function() {
        // This tells the front-end to get the data from the back-end with path "/problem"; once it comes back as a response, that's assigned to the problems variable.
        $http.get("/problems")
        .success(function(response) {
          console.log("I got the data I requested");
          console.log(response);
          $scope.problems = response;
          $scope.problem = "";
        }); // ends .success method
      } // ends refresh function
      refresh ();

      $scope.addProblem = function() {
        console.log($scope.problem);
        $http.post("/problems", $scope.problem)
        .success(function(response){
          // this ensures that the controller has received the data (the log will have an ID);
          console.log(response);
          refresh();
        }); //ends success method
      }; // ends addProblem function

      $scope.removeProblem = function(id) {
        console.log(id);
        $http.delete("/problems/" + id).success(function(response) {
          refresh();
        });
      };

      $scope.editProblem = function(problem) {
        $scope.problem = problem;
        if ($scope.showUpdateButton == false) {
          $scope.showUpdateButton = true;
        } else {
          $scope.showUpdateButton = false;
        }
      };

      $scope.updateProblem = function() {
        console.log($scope.problem._id);
        $http.put("/problems/" + $scope.problem._id, $scope.problem)
          .success(function(response) {
          $scope.showUpdateButton = false;
          refresh();
        });
      };

}]); // ends myApp module
