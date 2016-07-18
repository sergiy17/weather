var routerApp = angular.module('weatherApp', ['ui.router', 'weatherLib']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    // $urlRouterProvider.otherwise('/info');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('info', {
            url: '/info',
            template: 'partial-about.html'
        })
        .state('/',{
            url: '/',
            templateUrl: 'cities-list/cities-list.html'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit       
        });
        
});