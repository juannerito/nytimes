'use strict';

describe('Controller: MainCtrl', function() {
  // load the controller's module
  beforeEach(module('nytimesApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });

});


describe('NY Times app', function() {

  var hasModule = function(dependencies, module) {
    return dependencies.indexOf(module) >= 0;
  };

  var nytimesApp;

  // load the controller's module
  beforeEach(function() {
    nytimesApp = angular.module('nytimesApp');
  });


  it('should have ngResource as a dependency', function() {
      expect(hasModule(nytimesApp.requires, 'ngResource')).toBe(true);
  });

});
