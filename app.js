(function() {
  var app = angular.module('myApp', []);

  app.controller('TutsController', function($http){
	  var obj = {content:null};
	  $http.get('tutorials.json').success(function(data){
		  obj.content = data;
	  });
	  return obj;
      this.tutorials = obj;
  });
  
})();
