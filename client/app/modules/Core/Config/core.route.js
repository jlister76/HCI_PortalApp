(function(){
  'use strict';

  angular
    .module('com.module.core')
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('router', {
          url: '/router',
          template: '<div class="lockscreen" style="background-color:#000; height: 100%"></div>',
          controller: 'RouteCtrl'
        })
        .state('error', {
          url: '/error',
          template: '<div class="text-center alert alert-danger" style="margin: 100px">An error occurred.</div>'
        })
        .state('login', {
          url: '/login',
          templateUrl: 'Modules/Core/Views/login.html',
          controller: 'LogInCtrl'
        })
        .state('portal', {
          abstract: true,
          url: '/portal',
          template: '<div flex layout="column" ui-view ></div>',
          controller: 'HomeCtrl'
        })
        .state('portal.app-launcher', {
          url: '',
          templateUrl: 'modules/Core/Views/app-launcher.html',
          controller: 'HomeCtrl'
        });
      $urlRouterProvider.otherwise('/router');

    })
})();
