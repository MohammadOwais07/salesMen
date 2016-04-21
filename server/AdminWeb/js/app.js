angular.module('myApp', ['ngMaterial', 'ui.router','firebase'])


    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('login', {
                url: '/login',
                //abstract: true,
                templateUrl: '../views/login/login.html',
                controller: 'loginCtrl'
                //   template: '<h1>OWAIS</h1>'
            })


            .state('signUp', {
                url: '/signUp',

                templateUrl: '../views/signUp/signUp.html',
                controller: 'singUpCtrl'


            })
            .state('dashbord', {

                url: '/dashbord',
                templateUrl: '../views/dashbord/dashbord.html',
                controller: 'dashCtrl'


            })
            .state('dashbord.product', {
                url: '/product',
                parent: 'dashbord',
                templateUrl: '../views/product/product.html',
                controller: 'productCtrl'


            })

            .state('dashbord.order', {
                url: '/order',
                parent: 'dashbord',
                templateUrl: '../views/order/order.html',
                controller: 'orderCtrl'


            })

            .state('dashbord.SalesMan',{
                url:'/dashbord',
                parent:'dashbord',
                templateUrl:'../views/SalesMan/SalesMan.html',
                controller: 'saleCtrl'
            })

           /* .state('dashbord.product', {
                url: '/product',
                parent: 'dashbord',
                loginCompulsory: true,
                views: {
                    'product@dashbord':{
                        controller: 'productCtrl',
                        //template:"<h1>Company : {{name}}</h1>"
                        templateUrl:'../views/product/product.html'
                    }
                }*/


        //
        //.state('tab.chats', {
        //    url: '/chats',
        //    views: {
        //        'tab-chats': {
        //            templateUrl: 'templates/tab-chats.html',
        //            controller: 'ChatsCtrl'
        //        }
        //    }
        //})
        //.state('tab.chat-detail', {
        //    url: '/chats/:chatId',
        //    views: {
        //        'tab-chats': {
        //            templateUrl: 'templates/chat-detail.html',
        //            controller: 'ChatDetailCtrl'
        //        }
        //    }
        //})
        //
        //.state('tab.account', {
        //    url: '/account',
        //    views: {
        //        'tab-account': {
        //            templateUrl: 'templates/tab-account.html',
        //            controller: 'AccountCtrl'
        //        }
        //    }
        //});

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/login');

    });
