(function(){
  'use strict';

  angular
    .module('com.module.riskAssessment')
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
        $state.transitionTo('portal.riskAssessments.dashboard.project',{projectId:id});
      };




      $scope.recentAssessments = [
        {location: "2411 Spruce", employee: "Martinez"},
        {location: "123 Texas Blvd", employee: "Johnson"},
        {location: "2411 Spruce", employee: "Martinez"},
        {location: "123 Texas Blvd", employee: "Johnson"},
        {location: "2411 Spruce", employee: "Martinez"}

      ];
      $scope.labels = ['Dog Bite','Slips, Trips & Falls', 'Over-Extended', 'Uneven Terrain'];
      $scope.data = [2,1,4,1];
      $scope.causes = [{type:'Dog Bite', frequency: 2},{type:'Slip,Trip & Fall', frequency:1},{type:"Over-Extended", frequency:4},{type:'Ueven Terrain', frequency:1}];


    $scope.projectId = $stateParams.projectId;
      $scope.level = $stateParams.level;

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
    })
})();
