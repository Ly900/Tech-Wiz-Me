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

}]);
