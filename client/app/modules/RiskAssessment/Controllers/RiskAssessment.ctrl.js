(function(){
  'use strict';

  angular
    .module('com.module.riskAssessment')
    .controller('RiskAssessmentCtrl', function($scope, $state){
      $scope.msg = 'Hello Risk Assessments!';

      $scope.employees = [
        {name:"John Doe"},
        {name:"Jane Smith"},
        {name: "Jack Black"}
      ];

      $scope.newAssessment = function () {
        $state.go('portal.riskAssessment.new');
      };

      $scope.employees = [
        {name: 'Allen Athey', status: "required"},
        {name: 'James Rodrgiuez', status: "optional"},
        {name: 'Billy Strickland', status: "required"},
        {name: 'Doug Collins', status: "required"},
        {name: 'William Armstrong', status: "required"},
        {name: 'David Johnson', status: "required"},
        {name: 'Milton Austin', status: "required"}
      ];


    })
})();
