angular.module('myApp', ['ngMaterial','ui.router'])


    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('login', {
                url: '/login',
                //abstract: true,
               templateUrl: '../views/login/login.html',
                controller : 'loginCtrl'
             //   template: '<h1>OWAIS</h1>'
            })


            .state('signUp', {
                url: '/signUp',

                templateUrl: '../views/signUp/signUp.html',
                controller: 'singUpCtrl'


            })
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
