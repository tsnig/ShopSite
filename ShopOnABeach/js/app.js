(function () {

    angular.module('app-shop',['ui.router','ngRoute']);

    angular.module('app-shop')
        .config(['$urlRouterProvider', '$stateProvider', '$rootScopeProvider', configRoutes]);
    
    function configRoutes($urlRouterProvider,$stateProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
           .state('home',
            {
                url: '/',
                views: {
                    'main@': {
                        templateUrl: '/views/homeView.html',
                        controller: 'homeController',
                        controllerAs: 'homeCtrl'
                    }
                },
                onEnter: function ($rootScope) {
                    $rootScope.searchField = "";
                }
            })
            .state('category', {
                url: '/category/:id',
                views: {
                    'main@': {
                        templateUrl: '/views/goodsView.html',
                        controller: 'goodsController',
                        controllerAs: 'goodsCtrl'
                    }
                }
            })
        .state('basket', {
            url: '/basket',
            views: {
                'main@': {
                    templateUrl: '/views/basketView.html',
                    controller: 'basketController',
                    controllerAs: 'basketCtrl'
                }
            },
            onEnter: function ($rootScope) {
                $rootScope.searchField = "";
            }
        });
            
    };
})()