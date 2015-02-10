(function() {
  var app = angular.module('myApp', []);

app.controller("TutsController", function($scope, $http) {
$scope.tutorials= [];
$http.get('tutorials.json').success(function(data) { 
    console.log("success!");
    $scope.tutorials = data.tutorials;
        console.log(data.tutorials);
    });    
});
})();