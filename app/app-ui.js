var routerApp = angular.module('weatherApp', ['ngRoute','ui.router', 'weatherLib']);

routerApp.config(function($routeProvider,$stateProvider, $urlRouterProvider) {
    
  // $urlRouterProvider.otherwise('/');
  
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
    })

    .state('/details/:cityId.daily', {
        url: '/daily',
        templateUrl: 'partials/partial-daily.html'
        
    })
    .state("/details/:cityId.now",{
      url: "/now",
      templateUrl: "partials/partial-now.html"
    })
    .state("/details/:cityId.hourly",{
      url: "/hourly",
      templateUrl: "partials/partial-hourly.html"
    });
});
