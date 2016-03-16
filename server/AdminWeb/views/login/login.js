/**
 * Created by Mohammad Owais on 2/10/2016.
 */

angular.module("myApp")
    .controller("loginCtrl", function ($scope, $state, $http) {
        $scope.a = 786;
        $scope.ab = function () {
            $state.go('signUp')
        }

        $scope.login = function () {
            $http.post('/login', $scope.user)
                .success(function (data) {
                    if (data.status) {  //cheak the value of data in status
                        // $state.go()
                        console.log(data)
                    }
                    else {
                        alert(data.message)
                        console.log("SignIn" + JSON.stringify(data))
                    }
                })
                .error(function (data) {//agr error hoga tu yahan aayga
                    console.log("error" + JSON.stringify(data))
                })

        }
    })




;

