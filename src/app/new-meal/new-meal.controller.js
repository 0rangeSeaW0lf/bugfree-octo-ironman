'use strict';

angular.module('workspace')
  .controller('NewMealCtrl', function ($scope, $rootScope) {

    $scope.add = function(meal, isValid) {
      if (isValid) {
        $scope.calculateCost(meal);
      }
    };
    $scope.calculateCost = function(meal) {
  		$scope.master = meal;

  		$rootScope.subtotal = $scope.master.cost * (1 + $scope.master.tax/100);
  		$rootScope.tip = $scope.subtotal*$scope.master.tip/100;
  		$rootScope.earnings.mealCount++;
  		$rootScope.earnings.tipTotal += $rootScope.tip;
  		$rootScope.earnings.averageMealTipe = $rootScope.earnings.tipTotal / $rootScope.earnings.mealCount;

	  };

    $scope.reset = function() {
      $scope.meal = {};
      $scope.mealsForm.$setPristine();
      $scope.mealsForm.$setUntouched();
      $rootScope.subtotal = 0;
      $rootScope.tip = 0;
    };
});