(function(){
  'use strict';

  angular
    .module('com.module.riskAssessment')
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('portal.riskAssessments', {
          abstract: true,
          url: '/risk-assessments',
          template: '<p>Risk Assessments</p><div ui-view></div>'
        })
        .state('portal.riskAssessments.main', {
          url: '',
          template: '<p>Inside the Risk Assessments</p>'
        })
    })
})();
