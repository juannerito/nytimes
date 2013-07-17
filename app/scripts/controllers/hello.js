/**
 *
 *	This is an Angular Controller
 *
 *
 * The ngController directive assigns behavior to a scope. This is a key aspect of how angular supports
 * the principles behind the Model-View-Controller design pattern.
 *
 * MVC components in angular:
 * Model — The Model is data in scope properties; scopes are attached to the DOM.
 * View — The template (HTML with data bindings) is rendered into the View.
 * Controller — The ngController directive specifies a Controller class; the class has methods that typically express the business logic behind the application.
 * */


angular.module('myApp').controller('HelloCtrl', function($scope) {
	$scope.firstname = 'Willy';
  	$scope.lastname = 'Wonka';
 });
