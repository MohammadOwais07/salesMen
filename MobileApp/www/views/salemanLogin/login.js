/**
 * Created by Mohammad Owais on 4/27/2016.
 */
angular.module("starter")
  .controller('loginCtrl', function ($scope, $state, $http,apiConfig) {
    $scope.user = {
      email:"",
      password: ""
    }

    $scope.login = function () {
      //  $state.go('home')
      $http.post(apiConfig.appUrl +'/salesmanlogin', $scope.user)
        .success(function (data) {

          if (data.isAdmin == false) {  //cheak the value of data in status
            $state.go('home');
            localStorage.setItem('token', data.token);
            console.log(data)
          }
          else {
            alert(data.message);
            console.log("SignIn" + JSON.stringify(data))
          }
        })
        .error(function (data) {//agr error hoga tu yahan aayga
          console.log("error" + JSON.stringify(data))
        })


    }

  })
