(function(){
  'use strict';
  angular
    .module('com.module.riskAssessment')
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
      .state('portal.riskAssessment', {
        abstract: true,
        url: '/risk-assessment',
        template: '<div ui-view layout style="border:dashed thin red;"></div>'
      })
        .state('portal.riskAssessment.home', {
          url: '',
          templateUrl: 'modules/RiskAssessment/Views/base.html',
          controller: 'RiskAssessmentCtrl'        })
    })

})();
