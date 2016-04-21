/**
 * Created by Mohammad Owais on 4/7/2016.
 */
angular.module("myApp")
.controller('saleCtrl',function($scope,$http, $firebaseObject, $firebaseArray){
        var ref = new Firebase("https://salemanapp.firebaseio.com/salesmen");
        var syncObject = $firebaseObject(ref);
        $scope.salesmen = $firebaseArray(ref);// sink = continously update


        $scope.salesman = {
            name:"",
            email:"",
            address:"",
            number:""

        };
            $scope.addSalesMan = function(){
                // add new items to the array
                // the message is automaically added to our Firebase database!

                ref.push($scope.salesman); //its is node and it can add on fireBase

                // console.log($scope.salesman)
               /* SalesManService.AddSalesMan($scope.salesman)
                    .then(function(){

                    },function(){

                    })*/

            }

    })
