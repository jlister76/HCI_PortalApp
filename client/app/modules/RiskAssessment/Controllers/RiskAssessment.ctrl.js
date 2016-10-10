(function(){
  'use strict';

  angular
    .module('com.module.riskAssessment')
    .controller('RiskAssessmentCtrl', function($scope){
      $scope.msg = 'Hello Risk Assessments!';

      $scope.employees = [
        {name:"John Doe"},
        {name:"Jane Smith"},
        {name: "Jack Black"}
      ];

    })
})();
