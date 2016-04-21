/**
 * Created by Mohammad Owais on 3/30/2016.
 */
angular.module("myApp")
    .controller("productCtrl", function ($scope, $http, $firebaseObject, $firebaseArray) {
        var ref = new Firebase("https://salemanapp.firebaseio.com/product");
        var syncObject = $firebaseObject(ref);
        $scope.products = $firebaseArray(ref);// sink = continously update

        $scope.product = {
            name: "",
            quantity: "",
            price: ""
        }

        $scope.addProduct = function(){
           // console.log($scope.product)
            ref.push($scope.product); //its is node and it can add on fireBase
        }

    })