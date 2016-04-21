/**
 * Created by Mohammad Owais on 3/17/2016.
 */

angular.module("myApp")
    .controller("dashCtrl", function ($scope, $state, $http, $mdSidenav) {
        $scope.a = 786;
        $scope.ab = function () {
            //  $state.go('dashbord')
        };
        $scope.openRight = function () {
            return $mdSidenav('right').toggle();
        };

        $scope.gotoProduct = function () {
            $state.go('dashbord.product')


        };


        $scope.gotoorder = function () {
            $state.go('dashbord.order')
        };

        $scope.gotoSaleMan = function () {
            $state.go('dashbord.SalesMan')
        };
        $scope.logout = function () {
            localStorage.removeItem('token');
            $state.go('login')
        };
        $scope.save = function () {


        };
        $scope.cancel = function () {
            $mdSidenav('right').toggle();
        };


    })
