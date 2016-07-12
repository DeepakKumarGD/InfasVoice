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
  		var currentRoute = $state.current.name;
  		if(currentRoute === 'dashboardDetail'){
  			console.log('Loadinfg dgfds...!', posts);
  			$scope.posts = posts;
  		}
  	};

  	$scope.goto = function(view){
  		$state.go('dashboardDetail');
  		// $state.go(view);
  	}
  	
   $scope.init();
  }]);
