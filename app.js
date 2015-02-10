(function() {
  var app = angular.module('myApp', []);

  app.controller('TutsController', function($http){
	  this.tutorials = [];
	  
	  $http.get('tutorials.json').success(function(data){
		  this.tutorials = data;
	  });
  });
  
})();
