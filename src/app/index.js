'use strict';

angular.module('workspace', ['ngAnimate', 'ngSanitize', 'ngRoute', 'mgcrea.ngStrap'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
