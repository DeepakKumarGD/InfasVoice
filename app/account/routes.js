'use strict';

angular.module('InfasVoice').config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$translateProvider',
	function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $translateProvider) {
	$stateProvider
	.state('account', {
		'abstract': true,
		'url': '/account'
	})
	.state('login',{
      url: '/',
      views:{
        'content@':{
				templateUrl: 'account/login.html',
				controller: 'AccountCtrl'
			}
		},
		resolve: {			
			translatePartialLoader: ['$translate', '$translatePartialLoader', function($translate, $translatePartialLoader) {
				$translatePartialLoader.addPart('account');
				return $translate.refresh();
			}]
		}
    })
    .state('register',{
      url: '/register',
      parent: 'account',
      views:{
        'content@':{
          templateUrl: 'account/register.html',
				controller: 'AccountCtrl'
			}
		},
		resolve: {			
			translatePartialLoader: ['$translate', '$translatePartialLoader', function($translate, $translatePartialLoader) {
				$translatePartialLoader.addPart('account');
				return $translate.refresh();
			}]
		}
    })
    .state('forgotPassword',{
      url: '/forgotPassword',
      parent: 'account',
      views:{
        'content@':{
			templateUrl: 'account/forgotPassword.html',
			controller: 'AccountCtrl'
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