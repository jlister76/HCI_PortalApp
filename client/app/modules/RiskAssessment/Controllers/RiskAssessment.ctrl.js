(function(){
  'use strict';

  angular
    .module('com.module.riskAssessment')
    .controller('RiskAssessmentCtrl', function($scope, $state, $interval){
      var timeBegan = moment();
      var started = window.setInterval(Clock, 10);
      $scope.stop = function (){
        window.clearInterval(started); };
      function Clock () {
        var currentTime = moment(),
          elapsedTime = currentTime.diff(timeBegan),
          el = angular.element(document.querySelector("#display"));
        el.html(moment(elapsedTime).format('mm:ss'))

      }
      $scope.reset = function (){
        window.clearInterval(started);
        timeBegan = moment();
        var resetEl = angular.element(document.querySelector("#display"));
        resetEl.html("00:00");
      };

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

      $scope.stop = function (){
        window.clearInterval(started); };

      function Clock () {
        var currentTime = moment(),
          elapsedTime = currentTime.diff(timeBegan),
          el = angular.element(document.querySelector("#display2"));
        el.html(moment(elapsedTime).format('mm:ss'))

      }
      $scope.reset = function (){
        window.clearInterval(started);
        timeBegan = moment();
        var resetEl = angular.element(document.querySelector("#display2"));
        resetEl.html("00:00");
      };

      $scope.reset();
      var timeBegan = moment();
      var started = window.setInterval(Clock, 10);

    })
    .controller('Step1Ctrl', function($scope){

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

      $scope.stop = function (){
        window.clearInterval(started); };

      function Clock () {
        var currentTime = moment(),
          elapsedTime = currentTime.diff(timeBegan),
          el = angular.element(document.querySelector("#display"));
        el.html(moment(elapsedTime).format('mm:ss'))

      }
      $scope.reset = function (){
        window.clearInterval(started);
        timeBegan = moment();
        var resetEl = angular.element(document.querySelector("#display"));
        resetEl.html("00:00");
      };

      $scope.reset();
      var timeBegan = moment();
      var started = window.setInterval(Clock, 10);

    })
    .controller('Step2Ctrl', function($scope){

      $scope.stop = function (){
        window.clearInterval(started); };

      function Clock () {
        var currentTime = moment(),
          elapsedTime = currentTime.diff(timeBegan),
          el = angular.element(document.querySelector("#display2"));
        el.html(moment(elapsedTime).format('mm:ss'))

      }
      $scope.reset = function (){
        window.clearInterval(started);
        timeBegan = moment();
        var resetEl = angular.element(document.querySelector("#display2"));
        resetEl.html("00:00");
      };

      $scope.reset();
      var timeBegan = moment();
      var started = window.setInterval(Clock, 10);


    })
    .controller('Step3Ctrl', function($scope){
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

      $scope.stop = function (){
        window.clearInterval(started); };

      function Clock () {
        var currentTime = moment(),
          elapsedTime = currentTime.diff(timeBegan),
          el = angular.element(document.querySelector("#display3"));
        el.html(moment(elapsedTime).format('mm:ss'))

      }
      $scope.reset = function (){
        window.clearInterval(started);
        timeBegan = moment();
        var resetEl = angular.element(document.querySelector("#display3"));
        resetEl.html("00:00");
      };
      $scope.reset();
      var timeBegan = moment();
      var started = window.setInterval(Clock, 10);
    })
})();
