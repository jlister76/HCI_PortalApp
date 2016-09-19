(function(){
  'use strict';

  angular
    .module('com.module.riskAssessment')
    .controller('DashboardCtrl', function($scope){

      $scope.percentage= 80;

      $scope.groups = [
        {title: 'Division_43',
        percentage: 80,
        projects: [
          {id: '5L', title: 'Project 5L', percentage: 40}, {id: '5B', title: 'Project 5B', percentage: 20},{id: '5E',title: 'Project 5E', percentage: 20}
        ]},
        {title: 'Division_38',
          percentage: 80,
          projects: [
            {id: '23',title: 'Project 23', percentage: 40}, {id: '24', title: 'Project 24', percentage: 20},{id: '25', title: 'Project 25', percentage: 20}
          ]}
      ];



    $scope.loadStats = function (id){
      //alert(id);
      var el = angular.element(document.querySelectorAll('#stat-board'));

      var stats = '<div flex layout style="width: 100%; background-color: white; border-radius: 1%; padding: .5rem; box-shadow: 1px 3px 5px #888888; margin:1rem;">' +
        '<div layout="column">' +
        '<span class="md-subhead">Project 5L</span>' +
        '<span class="md-body-1">Group 1</span>' +
        '<span class="md-body-1">Group 2</span>' +
        '</div>'
        '</div>';


      el.html(stats);
    }

    })
})();
