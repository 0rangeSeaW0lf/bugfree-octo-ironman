'use strict';

angular.module('myApp',['ngMessages']).controller('FormCtrl', function($scope,$rootScope){
    
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
		
})
.controller('CalculateCtrl', function($scope){
    $scope.subtotal = 0;
    $scope.tip = 0;
    
    $scope.$on('calculateCost', function(event, meal) {
		$scope.master = meal;
		$scope.content = true;
		$scope.subtotal = $scope.master.cost * (1 + $scope.master.tax/100);
		$scope.tip = $scope.subtotal*$scope.master.tip/100;
		$scope.earnings.mealCount++;
		$scope.earnings.tipTotal += $scope.tip;
		$scope.earnings.averageMealTipe = $scope.earnings.tipTotal / $scope.earnings.mealCount;
	});
	
	$scope.$on('resetAll', function(event) {
		$scope.earnings = {tipTotal: 0, mealCount: 0, averageMealTipe: 0};
		$scope.content = false;
		$scope.subtotal = 0;
        $scope.tip = 0;
	});
	
	$scope.earnings = {tipTotal: 0, mealCount: 0, averageMealTipe: 0};
    $scope.content = false;
    
})
.controller('ResetAll', function($scope, $rootScope) {
    $scope.reset = function() {
        $rootScope.$broadcast('resetAll');
    };
    
    $scope.reset();
});