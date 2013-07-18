/**
 * NY Times services
*
 * A factory which creates a resource object that lets you interact with 
 * RESTful server-side data sources.
 * The returned resource object has action methods which provide high-level 
 * behaviors without the need to interact with the low level $http service.
 */

angular.module('myApp').factory('nyTimesBestSellersService',
    function($resource) { /*  <-- dependency injection!  */
      'use strict';
      var listNamesUri = 'http://api.nytimes.com/svc/books/v2/lists/names.jsonp';
      var listUri = 'http://api.nytimes.com/svc/books/v2/lists/:listName.jsonp';


      var params = {
        'callback': 'JSON_CALLBACK',
        'api-key': '88c24f76287150514cf53f74de3a409b:16:66577992'
      };

      var actions = {
        get : {
          method: 'JSONP'
        }
      };

      return {
        listOfLists: function() {
          return $resource(listNamesUri, params, actions);
        },
        list: function(){
          return $resource(listUri, params, actions);
        }

      };
});
