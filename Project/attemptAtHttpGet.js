(function() {
  var app = angular.module('myApp', []);
  var game = [];
  
app.controller("TutsController", function($http) {
game.tutorials = [];
$http.get('tutorials.json').success(function(data) { 
    game.tutorials = data;
    });    
});
})();