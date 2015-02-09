(function(){
    var app = angular.module('app-directives', []);

    app.directive("tutorialSpecs", function() {
      return {
        restrict:"A",
        templateUrl: "tutorial-specs.html"
      };
    });
	
  })();
