(function(){
  'use strict';

  angular
    .module('com.module.riskAssessment')
    .controller('RiskAssessmentCtrl', function($scope, $state, timeService,$window){


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

      $scope.startTimer = function (){
          if ($window.sessionStorage.getItem('startTime')){
            console.log("Start time already exist.")
          }else{
            var a = moment();
            timeService.setProperty(a);
            console.log("The start time has been set to "+a);
            $window.sessionStorage.setItem('startTime', a);
          }
      };
      $scope.endTimer = function (){
        var a = moment();
        timeService.setPropertyB(a);
        console.log("The end time is "+a);
      };

    })
    .controller('RecapCtrl', function($scope,timeService, $window){

      function duration(){

        var timer = timeService.getProperty();
        //var a = timer.startTime;
        var startTime = $window.sessionStorage.getItem(('startTime'));
        var newStartTime = new Date(startTime);
        var a = moment(newStartTime);
        var b = timer.endTime;
        console.log("The start time is "+a+" ,and the end time is "+b);
        var diff = b.diff(a);
        console.log("The difference between "+a+" & "+b+" is "+diff+" milliseconds.");

        var durationInMinutes = moment.duration(diff).asMinutes();

        if (!$window.sessionStorage.getItem('duration')){
          $window.sessionStorage.setItem('duration', durationInMinutes);
          $scope.dur = $window.sessionStorage.getItem('duration');
          console.log($scope.dur);
        }else{
          $scope.dur = $window.sessionStorage.getItem('duration') ;
          console.log($scope.dur);
        }


      };
      duration();

      $scope.clearDuration = function(){
        $window.sessionStorage.removeItem('duration');

      };
      $scope.clearStartTime = function() {
        $window.sessionStorage.removeItem('startTime');
      };

      function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(angular.element(document.querySelectorAll('#map')), {
          zoom: 4,
          center: uluru
        });

        initMap();
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

    })
    .service('timeService', function(){
        var newTime = {
          startTime: moment(),
          endTime: moment()
        };

      return {
        getProperty: function () {
          return newTime;
        },
        setProperty: function(value) {
          newTime.startTime = value;
        },
        setPropertyB: function(value) {
          newTime.endTime = value;
        }
      };

    })
})();
