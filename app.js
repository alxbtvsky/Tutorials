(function() {
  var app = angular.module('tutorialApp', ['app-directives']);

  app.controller('TutorialsController', ['$http', function($http){
    var app = this;
    app.tutorials = [];
    $http.get('./tutorials.json').success(function(data){
        app.tutorials = data;
    });
  }]);
})();