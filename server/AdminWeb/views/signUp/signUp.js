/**
 * Created by Mohammad Owais on 2/11/2016.
 */
angular.module("myApp")
    .controller("singUpCtrl", function ($scope, $http,$state) {
        $scope.a = 786;
        $scope.user = {
            firstName : "",
            lastName: "",
            email: "",
            password: "",
            Cpassword: "",
            isAdmin : true

        }
        $scope.signUp = function(){
            //console.log($scope.user);
            $http.post('/signUp',$scope.user)///or http post req in signUp /
            // agr sucess ho gaya tu yahan aayga succes data
                .success(function(data){
                    if(data.status){
                        $state.go('login');
                        console.log("SignUp"+ JSON.stringify(data))
                    }
                    else {
                        alert(data.message)
                        console.log("SignUp"+ JSON.stringify(data))
                    }
                })
                .error( function(data){//agr error hoga tu yahan aayga
                    console.log("error"+ JSON.stringify(data))
                })

            }


    });
