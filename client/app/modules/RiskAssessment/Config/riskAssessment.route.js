(function(){
  'use strict';
  angular
    .module('com.module.riskAssessment')
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
      .state('portal.riskAssessment', {
        abstract: true,
        url: '/risk-assessment',
        template: '<div layout="column" layout-align="start center" style="width:auto;"><p class="md-title">Risk Assessment</p><div ui-view layout layout-align="center start" style="width:100%;"></div></div>'
      })
        .state('portal.riskAssessment.home', {
          url: '',
          templateUrl: 'modules/RiskAssessment/Views/base.html',
          controller: 'RiskAssessmentCtrl'
        })
        .state('portal.riskAssessment.new', {
          url: '/new',
          templateUrl: 'modules/RiskAssessment/Views/new-assessment.html',
          controller: 'RiskAssessmentCtrl'
        })
    })


})();
