'use strict';

/**
 * @ngdoc function
 * @name vistalyticsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vistalyticsApp
 */
angular.module('InfasVoice')
  .controller('MainCtrl',['$rootScope','$state',  function ($rootScope, $state) {
    $rootScope.goToLoginPage = function(){
    	$state.go('login');
    };

    $rootScope.goToForgotPassword = function(){
    	$state.go('forgotPassword');
    };

    $rootScope.goToRegisterPage = function(){
    	$state.go('register');
    };

    $rootScope.goToDashboardPage = function(){
    	$state.go('dashboardHome');
    };
  }]);
