(function(){
  'use strict';

  angular
    .module('com.module.riskAssessment')
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('portal.riskAssessments', {
          abstract: true,
          url: '/risk-assessments',
          templateUrl: 'modules/RiskAssessment/Views/base.html'
        })
        .state('portal.riskAssessments.dashboard', {
          url: '',
          templateUrl: 'modules/RiskAssessment/Views/dashboard.html',
          controller: 'DashboardCtrl'
        })
        .state('portal.riskAssessments.dashboard.stats', {
          url: '/stats',
          templateUrl: 'modules/RiskAssessment/Views/stats.html',
          controller: 'StatsCtrl'
        })
        .state('portal.riskAssessments.dashboard.project', {
          url: '/project/:projectId',
          templateUrl: 'modules/RiskAssessment/Views/project.html',
          controller: 'ProjectCtrl'
        })
        .state('portal.riskAssessments.dashboard.group', {
          url: '/group/:groupId',
          templateUrl: 'modules/RiskAssessment/Views/group.html',
          controller: 'GroupCtrl'
        })
        .state('portal.riskAssessments.create', {
          url: '/create',
          templateUrl: 'modules/RiskAssessment/Views/dashboard.html',
          controller: 'DashboardCtrl'
        })
    })
})();
