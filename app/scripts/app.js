'use strict';

/* Note, we have dependency injection here, but we'll come back to that later */


angular.module('myApp', ['ngResource'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/hello-world', {
        templateUrl: 'views/hello-world.html'
        ,controller: 'HelloCtrl'
      })
      .when('/ny-times', {
        templateUrl: 'views/best-sellers.html',
        controller: 'BestSellersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


