'use strict';

angular.module('workspace', ['ngAnimate', 'ngSanitize', 'ngRoute', 'mgcrea.ngStrap', 'ngMessages'])
  .config(function ($routeProvider, $locationProvider) {
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
      $locationProvider.html5Mode({ enabled: true, requireBase: false }).hashPrefix('!');
  })
  .run(function($rootScope, $location, $timeout) {
      $rootScope.$on('$routeChangeError', function() {
          $location.path('/');
      });

      $rootScope.earnings = {tipTotal: 0, mealCount: 0, averageMealTipe: 0};

      $rootScope.subtotal = 0;

      $rootScope.tip = 0;

      $rootScope.$on('$routeChangeStart', function() {
        $rootScope.isLoading = true;
      });
      $rootScope.$on('$routeChangeSuccess', function() {
        $timeout(function() {
          $rootScope.isLoading = false;
        }, 1000);
      });
  });