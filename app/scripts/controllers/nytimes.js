'use strict';

angular.module('myApp')
  .controller('NyTimesCtrl', function($scope, nyTimesBestSellersService) {

    // some stuff
    $scope.selectedIndex = -1;

    // services
    var listOfLists = nyTimesBestSellersService.listOfLists();

    listOfLists.get({}, function(data){
      $scope.lists = data.results;
    });

    $scope.getClass = function(ind){
      return ( ind === $scope.selectedIndex ) ? "selected" : "";
    };

    $scope.selectList = function(ind){
      // highlight the selected list
      $scope.selectedIndex = (ind === $scope.selectedIndex) ? -1 : ind;
      $scope.listChosen = true;

      var listName = this.list.list_name;

      var BestSellerList = nyTimesBestSellersService.list();

      BestSellerList.get({listName:listName}, function(data) {
        $scope.bestsellers = data.results;
      });
    };

  });
