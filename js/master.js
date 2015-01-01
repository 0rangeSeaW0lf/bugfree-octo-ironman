angular.module('myApp',['ngMessages']).controller('FormCtrl', function($scope,$rootScope){
    // $scope.master = {};
    
    $scope.add = function(meal, isValid) {
        if (isValid) {
            $rootScope.$broadcast('calculateCost', meal);
        }
    };
    
    $scope.reset = function() {
        $scope.meal = {};
    };
    
    $scope.reset();
		
}).controller('CalculateCtrl', function($scope){
    $scope.$on('calculateCost', function(event, meal) {
		$scope.master = meal;
		$scope.content = true;
		$scope.subtotal = $scope.master.cost * (1 + $scope.master.tax/100);
		$scope.tip = $scope.subtotal*$scope.master.tip/100;
		$scope.earnings.mealCount++;
		$scope.earnings.tipTotal += $scope.tip;
		$scope.earnings.averageMealTipe = $scope.earnings.tipTotal / $scope.earnings.mealCount;
	});
	
	$scope.earnings = {tipTotal: 0, mealCount: 0, averageMealTipe: 0};
    
    $scope.content = false;
});