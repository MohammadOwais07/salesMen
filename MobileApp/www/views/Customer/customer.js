/**
 * Created by Mohammad Owais on 4/27/2016.
 */
angular.module("starter")
  .controller("customerCtrl", function ($scope, $http, $firebaseObject, $firebaseArray) {
    var ref = new Firebase("https://salemanapp.firebaseio.com/customer");


    $scope.customer = {
      name: "",
      product: "",
      quantity: ""
    }

    $scope.submit = function () {
      // console.log($scope.customer)
      ref.push($scope.customer) //its is node and it can add on fireBase
    }
  })
