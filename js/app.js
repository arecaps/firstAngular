//(function(angular){
  'use strict';
  var app = angular.module('myApp', []);
  app.controller('MyController',
  function($scope) {
    $scope.clock = {
      now: new Date()
    };
    var updateClock = function(){
      $scope.clock.now = new Date();
    };
    setInterval(function(){
      $scope.$apply(updateClock);
    },1000);
    updateClock();

    $scope.adder = {
      add: function(number){
        $scope.adder.result += number;
      },
      subtract: function(number){
        $scope.adder.result -= number;
      },
      result: 0
    };
  });

  app.filter('flip', function(){
    return function(input) {
      var flipped = '';
      if(input){
        var i;
        for(i = input.length; i>= 0; i--){
          flipped += input.charAt(i);
        }
      }
      return flipped;
    };
  });
//}(angular));