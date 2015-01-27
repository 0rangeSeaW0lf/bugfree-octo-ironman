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
      .when('/my-earnings', {
        templateUrl: 'app/my-earnings/my-earnings.html',
        controller: 'EarningsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope, $location) {
      $rootScope.$on('$routeChangeError', function() {
          $location.path('/');
      });
      $rootScope.earnings = {tipTotal: 0, mealCount: 0, averageMealTipe: 0};
      $rootScope.subtotal = 0;
      $rootScope.tip = 0;
  });