'use strict';

angular.module('workspace')
  .controller('EarningsCtrl', function ($scope, $rootScope) {


    $scope.reset = function(){
      $rootScope.earnings = {tipTotal: 0, mealCount: 0, averageMealTipe: 0};
      $rootScope.subtotal = 0;
      $rootScope.tip = 0;
    };
  });