'use strict';

/**
 * @ngdoc function
 * @name InfasVoice.controller:AccountCtrl
 * @description
 * # LoginCtrl
 * Controller of the InfasVoice
 */
angular.module('InfasVoice')
  .controller('AccountCtrl', [ '$scope','$rootScope', '$state', function ($scope, $rootScope, $state) {
   
   	/**
   	 *
   	*/
  	$scope.init = function(){
  		console.log('Init is wokring...!');
  	};

  	/**
  	 *
  	*/
  	$scope.login = function(){
  		$rootScope.goToDashboardPage();
  	};



  	/**
  	 * Function to register new user from Registration page
  	*/
  	$scope.reigisterUser = function(){
  		console.log('User Registration from here...!');
  	};

  	/**
  	 * Function to redirect to login Page on click of cancel button from Registration page
  	*/
  	$scope.redirectToLogin = function(){
  		$state.go('login');
  	};

  	/**
  	 *
  	*/
   	$scope.init();
  }]);
