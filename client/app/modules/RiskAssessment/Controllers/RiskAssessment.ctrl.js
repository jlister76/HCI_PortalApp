(function(){
  'use strict';

  angular
    .module('com.module.riskAssessment')
    .controller('RiskAssessmentCtrl', function($scope, $state, timeService){


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
      $scope.hazards = [
        "Snow/Ice",
        "Loose Gravel/Dirt",
        "Wet Grass/Mud",
        "Overgrown Vegetation",
        "Poison Ivy/Oak/Sumac",
        "Surface Transition",
        "Change in Elevation",
        "Holes",
        "Debris [boards, nails, etx.]," +
        "Tripping Hazards",
        "Fences",
        "Poor Visibility",
        "Vehicular Traffic",
        "Hand Tools",
        "Lifting",
        "Basement/Attic Debris",
        "Stairs/Ladders",
        "Low Ceilings",
        "Dogs",
        "Bees",
        "Tick/Fleas",
        "Ants",
        "Snakes",
        "Spiders",
        "Livestock",
        "Look ahead 15 seconds",
        "4-Second following distance",
        "Scan a mirror 5 to 8 seconds",
        "Move eyes every 2 seconds",
        "Surround vehicle with space",
        "Seek eye contact",
        "Avoid backing if possible," +
        "Backing slowly",
        "Backing upon arrival",
        "G.O.A.L. - Get out and look",
        "Distracted driving",
        "Drivers Lincese Check"
      ];

      $scope.step1 = function (){
          var a = moment();
        timeService.setProperty(a);
        console.log(a);
      };

    })
    .controller('testCtrl', function($scope,timeService){

      $scope.step3 = function(){
        var a = timeService.getProperty();
        console.log(a);
        var b = moment();
        console.log(b);
        var diff = b.diff(a);
        $scope.dur = moment.duration(diff).asMinutes();
        console.log($scope.dur);
      };
      $scope.step3();
    })
    .service('timeService', function(){
        var newTime = {
          startTime: moment()
        };

      return {
        getProperty: function () {
          return newTime;
        },
        setProperty: function(value) {
          newTime.startTime = value;
        }
      };

    })
})();
