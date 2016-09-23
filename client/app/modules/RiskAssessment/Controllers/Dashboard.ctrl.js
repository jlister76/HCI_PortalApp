(function(){
  'use strict';

  angular
    .module('com.module.riskAssessment')
    .controller('DashboardCtrl', function($scope){

      $scope.data = [5,10,3];
      $scope.labels =["Sprained Knee", "Inured Back", "Cut / Scratchnode"];
      $scope.series = ["Sprained Knee", "Inured Back", "Cut / Scratchnode"];
      $scope.groups = [
        {title: 'Division_43',
        percentage: 62,
        projects: [
          {id: '5L', title: 'Project 5L', percentage: 48}, {id: '5B', title: 'Project 5B', percentage: 79},{id: '5E',title: 'Project 5E', percentage: 56}
        ]},
        {title: 'Division_38',
          percentage: 50,
          projects: [
            {id: '23',title: 'Project 23', percentage: 23}, {id: '24', title: 'Project 24', percentage: 68},{id: '25', title: 'Project 25', percentage: 52}
          ]}
      ];
      $scope.recentAssessments = [
        {location: "2411 Spruce", employee: "Martinez"},
        {location: "123 Texas Blvd", employee: "Johnson"},
        {location: "2411 Spruce", employee: "Martinez"},
        {location: "123 Texas Blvd", employee: "Johnson"},
        {location: "2411 Spruce", employee: "Martinez"}

      ];

      $scope.causes = ['Dog Bite','Slip,Trip & Fall',"Over-Extended",'Ueven Terrain'];

    $scope.loadStats = function (id){
      //alert(id);
      //var el = angular.element(document.querySelectorAll('#stat-board'));
      $scope.changeClass = true;


        $scope.project = {title: 'Project 5L', groups:[{title: 'Fort Worth Central', percentage: 33},{title: 'Denton', percentage: 67},{title: 'Dallas East', percentage: 100}]};

    }

    })
})();
