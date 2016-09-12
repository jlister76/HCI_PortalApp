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
            $rootScope.currentUser = {
              id: response.user.id,
              tokenId: response.id,
              username: response.username,
              email: email
            };
          })

      }
      function getCurrent() {
        return Member
          .getCurrent()
          .$promise
          .then(function(response){
            console.log(response);
          })


      }
      return {
        login: login,
        getCurrent: getCurrent
      }
    })
})();
