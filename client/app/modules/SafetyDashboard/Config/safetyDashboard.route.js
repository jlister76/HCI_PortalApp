(function(){
  'use strict';

  angular
    .module('com.module.safetyDashboard')
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('portal.safety', {
          abstract: true,
          url: '/safety',
          templateUrl: 'modules/SafetyDashboard/Views/base.html'
        })
        .state('portal.safety.dashboard', {
          url: '',
          templateUrl: 'modules/SafetyDashboard/Views/dashboard.html',
          controller: 'DashboardCtrl'
        })
        .state('portal.safety.dashboard.stats', {
          url: '/stats',
          templateUrl: 'modules/SafetyDashboard/Views/stats.html',
          controller: 'StatsCtrl'
        })
        .state('portal.safety.dashboard.project', {
          url: '/project/:projectId',
          templateUrl: 'modules/SafetyDashboard/Views/project.html',
          controller: 'ProjectCtrl'
        })
        .state('portal.safety.dashboard.group', {
          url: '/group/:groupId',
          templateUrl: 'modules/SafetyDashboard/Views/group.html',
          controller: 'GroupCtrl'
        })
        .state('portal.safety.new', {
          url: '/new-assessment',
          templateUrl: 'modules/SafetyDashboard/Views/new-assessment.html',
          controller: 'DashboardCtrl'
        })
    })
})();
