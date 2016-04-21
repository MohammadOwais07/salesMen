/**
 * Created by Mohammad Owais on 4/7/2016.
 */
angular.module("myApp")
    .controller("orderCtrl",function($scope,$http, $firebaseObject, $firebaseArray){
        var ref = new Firebase("https://salemanapp.firebaseio.com/order");
        var syncObject = $firebaseObject(ref);
        $scope.orders = $firebaseArray(ref);// sink = continously update

        $scope.order = {
            name:"",
            product:"",
            address:""

        }

        $scope.addOrder = function(){
           // console.log($scope.order)
            // add new items to the array
            // the message is automaically added to our Firebase database!

            ref.push($scope.order); //its is node and it can add on fireBase
        }

    })