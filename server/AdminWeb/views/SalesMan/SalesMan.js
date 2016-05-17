/**
 * Created by Mohammad Owais on 4/7/2016.
 */
angular.module("myApp")
    .controller('saleCtrl', function ($scope, $http,$state, $firebaseObject, $firebaseArray) {
        var ref = new Firebase("https://salemanapp.firebaseio.com/salesmen");
        var syncObject = $firebaseObject(ref);
        $scope.salesmen = $firebaseArray(ref);// sink = continously update


        $scope.salesman = {
            name: "",
            email: "",
            address: "",
            number: "",
            password: "123",
            isAdmin : false

        };

        $scope.addSalesMan = function () {
            // add new items to the array
            // the message is automaically added to our Firebase database!
//console.log($scope.salesman);
            $http.post('/signUp', $scope.salesman)///or http post req in signUp /
                // agr sucess ho gaya tu yahan aayga succes data
                .success(function (data) {
                    if (data.status) {
                        $state.go('login');
                        console.log("SignUp" + JSON.stringify(data))
                    }
                    else {
                        alert(data.message)
                        console.log("SignUp" + JSON.stringify(data))
                    }
                })
                .error(function (data) {//agr error hoga tu yahan aayga
                    console.log("error" + JSON.stringify(data))
                })
            //ref.push($scope.salesman); //its is node and it can add on fireBase

            // console.log($scope.salesman)
            /* SalesManService.AddSalesMan($scope.salesman)
             .then(function(){

             },function(){

             })*/

        }

    })
