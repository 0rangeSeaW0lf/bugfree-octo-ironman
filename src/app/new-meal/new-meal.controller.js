'use strict';

angular.module('workspace')
  .controller('NewMealCtrl', function ($scope, $rootScope) {
    $scope.add = function(meal, isValid) {
      if (isValid) {
            $rootScope.$broadcast('calculateCost', meal);
        }
    };

    $scope.reset = function() {
      $scope.meal = {};
      $scope.mealsForm.$setPristine();
      $scope.mealsForm.$setUntouched();
    };

    $scope.$on('resetAll', function(event) {
      $scope.reset();
	  });

});