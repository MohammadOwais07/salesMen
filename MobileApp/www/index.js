/**
 * Created by Mohammad Owais on 4/27/2016.
 */

var app = angular.module("starter", ['ionic','firebase']);
app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/login')


  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: './views/salemanLogin/login.html',
      controller: 'loginCtrl'
    })
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: './views/home/home.html',
      controller: 'homeCtrl'
    })
  $stateProvider
    .state('customer', {
      url: '/customer',
      templateUrl: './views/customer/customer.html',
      controller: 'customerCtrl'
    })
  $stateProvider
    .state('customerList', {
      url: '/customerList',
      templateUrl: './views/customerList/customerList.html',
      controller: 'customerListCtrl'
    })
});
app.constant("apiConfig", (function(){
  var config = {
    "appUrl": "http://localhost:9000"
  }
  return config
})());
