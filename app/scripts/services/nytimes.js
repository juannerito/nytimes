/**
 *  NY Times services
 */

angular.module('myApp').factory('nyTimesBestSellersService',
    function($resource) {

      var resourceUri = 'http://api.nytimes.com/svc/books/v2/lists/names.jsonp'

      var params = {
        'callback': 'JSON_CALLBACK',
        'api-key': '88c24f76287150514cf53f74de3a409b:16:66577992'
      };

      var actions = {
        list : {
          method: 'JSONP'
        }
      };

      var Lists = $resource(resourceUri, params, actions);

      return {
        getLists: function() {
          return Lists;
        },

      };
});
