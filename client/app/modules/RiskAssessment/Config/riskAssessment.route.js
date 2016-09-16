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
        .state('portal.riskAssessments.main', {
          url: '',
          templateUrl: 'modules/RiskAssessment/Views/dashboard.html'
        })
    })
})();
