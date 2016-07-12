'use strict';

/**
 * @ngdoc function
 * @name vistalyticsApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the vistalyticsApp
 */
angular.module('InfasVoice')
  .controller('DashboardCtrl', [ '$scope','$rootScope', '$state', function ($scope, $rootScope, $state) {
   
  	$scope.init = function(){
  		console.log('Init is wokring...!');
  	}
  	
   $scope.init();
  }]);
