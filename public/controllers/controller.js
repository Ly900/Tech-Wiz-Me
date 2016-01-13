var myApp = angular
  .module("techWizMe", [])
  .controller('AppCtrl', [
    '$scope',
    '$http',
    function($scope, $http) {
      console.log("Response from Angular controller");
      // $scope.cardClass = "question-card-front";
      // $scope.changeClass = function() {
      //   if ($scope.cardClass == "question-card-front") {
      //     $scope.cardClass = "question-card-back";
      //   } else {
      //     $scope.cardClass = "question-card-front";
      //   }
      // }; //ends changeClass function

      // This tells the front-end to get the data from the back-end with path "/problem"; once it comes back as a response, that's assigned to the problems variable.
      $http.get("/problems")
      .success(function(response) {
        console.log("I got the data I requested");
        console.log(response);
        $scope.problems = response;
      }); // ends .success method








}]); // ends myApp module
