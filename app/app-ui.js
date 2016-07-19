var routerApp = angular.module('weatherApp', ['ngRoute','ui.router', 'weatherLib']);

routerApp.config(function($routeProvider,$stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('/details/:cityId', {
            url: '/details/:cityId',
            template: '<additional-data></additional-data>'
        })
        .state('/',{
            url: '/',
            //templateUrl: 'cities-list/cities-list.html'
            template: '<cities-list></cities-list>'
        });
        
});