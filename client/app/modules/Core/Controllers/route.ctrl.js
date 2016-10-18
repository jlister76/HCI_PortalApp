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
        $rootScope.currentUser = null;
        console.log('No curr user');
        /*$location.path('/login');*/

        $state.go('login');
      }
      if (AuthService.getCurrent){
        $state.go('portal.app-launcher');
        console.log(AuthService.getCurrent());
        $rootScope.currentUser;
        /*$location.path('/portal');*/

      }

    })
    .controller('LogInCtrl', function (AuthService, $scope, $location, $state, $rootScope){
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
             console.log("Logged In.");
             //var next = $location.nextAfterLogin || '/';
             //$location.nextAfterLogin = null;
             $state.go('portal.app-launcher');
             $rootScope.currentUser;


           })
           .catch(function(e){
             if (e) {
               console.log(e);
               $scope.err = e;

             }
           })
      }
    })
    .controller ('LogOutCtrl', function (AuthService, $scope, $state){
      $scope.logout = function () {
        console.log('Signing out...');
        AuthService.logout()
          .then(function(){
            $state.go('login');
            sessionStorage.clear();
          });
      };

    })
    .controller ('HomeCtrl', function($scope, AuthService, $state, $rootScope){
      if (!AuthService.getCurrent()){
        $state.go('login');
      }else {

        /*****************************************************************/
        //Sets current user
        AuthService.getCurrent()
          .$promise
          .then(function (user) {
            $rootScope.currentUser = user;

          });
        /*****************************************************************/
      }

    })

})();
