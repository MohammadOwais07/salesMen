/**
 * Created by Mohammad Owais on 4/27/2016.
 */
angular.module("starter")
  .controller('homeCtrl',function($scope, $state){
    $scope.a=786;

    $scope.customer = function(){
      $state.go('customer')

    }

    $scope.custList = function() {
      $state.go('customerList')
    }


  })

