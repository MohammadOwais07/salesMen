/**
 * Created by Mohammad Owais on 2/10/2016.
 */

angular.module("myApp")
.controller("loginCtrl", function ($scope,$state) {
    $scope.a = 786;
        $scope.ab = function(){
            $state.go('signUp')
        }
});

