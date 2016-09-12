(function () {
  'use strict';
  /**
   * @ngdoc function
   * @name com.module.core.controller:RouteCtrl
   * @description Redirect for access
   * @requires $q
   * @requires $scope
   * @requires $state
   * @requires $location
   * @requires AppAuth
   **/
  angular
    .module('com.module.core')
    .controller('RouteCtrl', function (AuthService, $location, $state, $scope, $rootScope) {

      if (!AuthService.getCurrent) {
        console.log('No curr user');
        /*$location.path('/login');*/
        $state.go('login');
      } else {
        console.log(AuthService.getCurrent());
        $location.path('/portal');
      }

    })
    .controller('LogInCtrl', function (AuthService, $scope, $location){
      $scope.user = {
        email: null,
        password: null
      };


      var params = {
        rememberMe: false
      };
      $scope.user = {
        rememberMe: false
      };
      $scope.login = function(){
         AuthService.login($scope.user.email, $scope.user.password)
           .then(function(){
             console.log("Logged In.")
             var next = $location.nextAfterLogin || '/';
             $location.nextAfterLogin = null;
             $location.path(next);

           })
      }
    })
    .controller ('LogOutCtrl', function (){})
    .controller ('HomeCtrl', function($scope, AuthService, $state){
      if (!AuthService.getCurrent()){
        $state.go('login');
      }else {
        console.log("This is good");
      }

    })

})();
