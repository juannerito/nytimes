'use strict';

angular.module('myApp')
  .controller('BestSellersCtrl', function($scope, nyTimesBestSellersService) {

    var list = nyTimesBestSellersService.getLists();
    var results = list.list({}, function(data){
      $scope.lists = data.results;
    });


    $scope.selectList = function(){
    	alert(0)
    }


    $scope.dateChosen = true;


  });
