(function(){
  'use strict';
  angular
    .module('com.module.riskAssessment')
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
      .state('portal.riskAssessment', {
        abstract: true,
        url: '/risk-assessment',
        templateUrl: 'modules/RiskAssessment/Views/base.html'
      })
        .state('portal.riskAssessment.menu', {
          url: '',
          templateUrl: 'modules/RiskAssessment/Views/menu.html',
          controller: 'RiskAssessmentCtrl'
        })
        .state('portal.riskAssessment.new', {
          url: '/new',
          templateUrl: 'modules/RiskAssessment/Views/new-assessment.html',
          controller: 'RiskAssessmentCtrl'
        })
        .state('portal.riskAssessment.step1', {
          url: '/step1',
          templateUrl: 'modules/RiskAssessment/Views/step1.html',
          controller: 'RiskAssessmentCtrl'
        })
    })


})();
