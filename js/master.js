angular.module('myApp',['ngMessages']).controller('FormCtrl', function($scope){
    $scope.inputs = {meal:'',tax:'',tip:''};
}).controller('calculateCtrl', function($scope){
    $scope.calculateSubtotal = function(meal,tax) {
        return meal + (1*tax/100);
    };
    $scope.calculateTip = function(subtotal, tip) {
        return subtotal*tip/100;
    };
    $scope.content = false;
});