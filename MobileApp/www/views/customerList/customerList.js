/**
 * Created by Mohammad Owais on 4/27/2016.
 */
angular.module("starter")
.controller('customerListCtrl',function($scope, $http, $firebaseObject, $firebaseArray){
    var ref = new Firebase("https://salemanapp.firebaseio.com/customer");
    var syncObject = $firebaseObject(ref);
    $scope.customers = $firebaseArray(ref);




  })
