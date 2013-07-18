'use strict';

/* Note, we have dependency injection here, but we'll come back to that later */


angular.module('myApp', ['ngResource'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/hello-world', {
        templateUrl: 'views/hello-world.html'
      })
      .when('/ny-times', {
        templateUrl: 'views/ny-times.html',
        controller: 'NyTimesCtrl'
      })
      .when('/ny-times-directive', {
        templateUrl: 'views/ny-times-directive.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


