'use strict';

/**
 * @ngdoc overview
 * @name vistalyticsApp
 * @description
 * # vistalyticsApp
 *
 * Main module of the application.
 */
 
angular
  .module('InfasVoice', [    
    'ngResource',
    'ui.router',
    'oc.lazyLoad',
    'pascalprecht.translate'
  ]).config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$translateProvider',
  function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $translateProvider) {
    $translateProvider.useLoader('$translatePartialLoader', {
      urlTemplate: 'i18n/{lang}/{part}.json'
    });
    $translateProvider.preferredLanguage('en');
    $urlRouterProvider.otherwise('/');     
  }]);
