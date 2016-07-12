'use strict';

angular.module('InfasVoice').config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$translateProvider',
	function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $translateProvider) {
	$stateProvider
	.state('dashboard', {
		'abstract': true,
		'url': '/dashboard'
	})
	.state('dashboardHome',{
      url: '/home',
      parent: 'dashboard',
      views:{
        'content@':{
				templateUrl: 'dashboard/dashboard.html',
				controller: 'DashboardCtrl'
			}
		},
		resolve: {			
			translatePartialLoader: ['$translate', '$translatePartialLoader', function($translate, $translatePartialLoader) {
				$translatePartialLoader.addPart('account');
				return $translate.refresh();
			}]
		}
    })

    .state('dashboardDetail',{
      url: '/detail',
      parent: 'dashboard',
      views:{
        'content@':{
				templateUrl: 'home/main.html',
				controller: 'DashboardCtrl'
			}
		},
		resolve: {			
			translatePartialLoader: ['$translate', '$translatePartialLoader', function($translate, $translatePartialLoader) {
				$translatePartialLoader.addPart('account');
				return $translate.refresh();
			}]
		}
    });
}])