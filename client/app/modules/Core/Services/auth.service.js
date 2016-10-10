(function(){
  'use strict';

  angular
    .module('com.module.core')
    .factory('AuthService', function(Member, LoopBackAuth, $rootScope){
      function login(email, password){
        var creds = {
          email: email,
          password: password
        };

        var params = {
          rememberMe: false
        };
        return Member
          .login(params, creds )
          .$promise
          .then(function(response){
            console.log(response);
            /*$rootScope.currentUser = {
              id: response.user.id,
              tokenId: response.id,
              username: response.username,
              email: email
            };*/
            //sessionStorage.currentUser = email;
          })

      }
      function getCurrent() {
        return Member
          .getCurrent()

      }
      function logout(){
       return Member
          .logout()
          .$promise
          .then(function () {
            $rootScope.currentUser = null;

          });
      }
      return {
        login: login,
        logout: logout,
        getCurrent: getCurrent
      }
    })
})();
