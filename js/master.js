angular.module('myApp',['ngMessages']).controller('FormCtrl', function($scope){
    $scope.master = {};
    
    $scope.add = function(meal, isValid) {
        if (isValid) {
            $scope.master = angular.copy(meal);
        }
    };
    
    $scope.reset = function() {
        $scope.master = {};
    };
    
    $scope.reset();
		
}).controller('CalculateCtrl', function($scope){
    $scope.$on('displayData', function(event) {
				$scope.content = true;
	});
    $scope.calculateSubtotal = function(meal,tax) {
        return meal + (1*tax/100);
    };
    $scope.calculateTip = function(subtotal, tip) {
        return subtotal*tip/100;
    };
    
    $scope.content = false;
});