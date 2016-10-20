(function(){
  'use strict';

  angular
    .module('com.module.riskAssessment')
    .controller('RiskAssessmentCtrl', function($scope, $state, timerFactory){


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



      var obj = {
        start: null,
        end: null
      };

       $scope.begin = function (){
        var a = moment();
         sessionStorage.setItem('time',a);
         console.log(a);
       };
       $scope.end = function(){
         var a = sessionStorage.getItem('time');
         var x = a.toISOString();
         console.log(x);
         /*console.log(a);
         console.log(moment.isMoment(x));
         var b = moment();
         var c = b.diff(x);
         console.log(c);*/
       };
       var durations = [];
        $scope.a = function () {
          var x = timerFactory.newTime();
          obj.start = x;
          return obj;
        };

      $scope.b = function () {
        var y = timerFactory.newTime();
        obj.end = y;
        return obj;
      };

     $scope.duration = function (a,b) {
       console.log(a,b);
     }

    })
    .factory('timerFactory', function(){
      function newTime (){
        var a = moment();
        return a;
      }

      return {
        newTime: newTime
      }
    })
})();
