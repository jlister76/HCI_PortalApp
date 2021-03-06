(function(){
  'use strict';

  angular
    .module('com.module.safetyDashboard')
    .controller('DashboardCtrl', function($scope, $state, $stateParams){

      $scope.groups = [
        {title: 'Division_43',
          percentage: 62,
          projects: [
            {id: '5L', title: 'Project 5L', percentage: 48, level: 'project'}, {id: '5B', title: 'Project 5B', percentage: 79, level: 'project'},{id: '5E',title: 'Project 5E', percentage: 56, level: 'project'}
          ]},
        {title: 'Division_38',
          percentage: 50,
          projects: [
            {id: '23',title: 'Project 23', percentage: 23}, {id: '24', title: 'Project 24', percentage: 68},{id: '25', title: 'Project 25', percentage: 52}
          ]}
      ];
      $scope.subGroup = function(id){
        $state.transitionTo('portal.safety.dashboard.project',{projectId:id});
      };
      $scope.veh_labels = ['JAN', 'FEB','MAR','APR','MAY','JUNE','JULY','AUG','SEPT','OCT','DEC'];
      $scope.veh_data = [2,0,0,3,0,0,0,0,1,1,0,0];
      $scope.recentAssessments = [
        {location: "2411 Spruce", employee: "Martinez"},
        {location: "123 Texas Blvd", employee: "Johnson"},
        {location: "2411 Spruce", employee: "Martinez"},
        {location: "123 Texas Blvd", employee: "Johnson"},
        {location: "2411 Spruce", employee: "Martinez"}

      ];
      $scope.labels = ['Dog Bite','Slips, Trips & Falls', 'Over Extending', 'Uneven-Terrain'];
      $scope.data = [
        2,1,4,1
      ];
      $scope.injury_options = {
        legend: {display:true},
        responsive: false,
        maintainAspectRatio: true
      };
      $scope.projectId = $stateParams.projectId;
      $scope.level = $stateParams.level;
      $scope.currQtr = 4;
    })
    .controller('StatsCtrl', function(){})
    .controller('ProjectCtrl', function($scope, $stateParams){
      $scope.projectId = $stateParams.projectId;

      $scope.project =
        {id: '5L',
          title: 'Project 5L',
          percentage: 64};

      $scope.groups = [
        {title: 'Fort Worth Central', percentage: 43, id:1},
        {title: 'Fort Worth South', percentage: 38, id:2},
        {title: 'Dallas West', percentage: 23, id:3}
      ];

    })
    .controller('GroupCtrl', function($scope, $stateParams){
      $scope.groupId = $stateParams.groupId;

      $scope.group = {
        title: "Fort Worth Central",
        employees: [
          {fname: "Joe", lname: "Smith", status: "required", assessments: [{month:1},{month:2}]},
          {fname: "Jane", lname: "Doe", status: "completed", assessments: [{month:1},{month:2},{month:3}],met:true}
        ]
      }
    })
})();
