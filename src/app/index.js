'use strict';

angular.module('workspace', ['ngAnimate', 'ngSanitize', 'ngRoute', 'mgcrea.ngStrap', 'ngMessages'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl'
      })
      .when('/new-meal', {
        templateUrl: 'app/new-meal/new-meal.html',
        controller: 'NewMealCtrl'
      })
      .when('my-earnings', {
        templateUrl: 'app/my-earnings/my-earnings.html',
        controller: 'EarningsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('ResetAll', function($scope, $rootScope) {
    $scope.reset = function() {
        $rootScope.$broadcast('resetAll');
    };

    $scope.reset();
  });