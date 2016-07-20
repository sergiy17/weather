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
    .state("/details/:cityId.now",{
      url: "/now",
      templateUrl: "partials/partial-now.html"
    })
    .state('/details/:cityId.daily', {
      url: '/daily',
      templateUrl: 'partials/partial-daily.html'
    })
    .state("/details/:cityId.hourly",{
      url: "/hourly",
      templateUrl: "partials/partial-hourly.html"
    })
    .state("/details/:cityId.morning",{
      url:"/morning",
      templateUrl:"partials/partial-morning.html"
    })
    .state("/details/:cityId.afternoon",{
      url:"/afternoon",
      templateUrl:"partials/partial-afternoon.html"
    })
    .state("/details/:cityId.evening",{
      url:"/evening",
      templateUrl:"partials/partial-evening.html"
    })
    .state("/details/:cityId.overnight",{
      url:"/overnight",
      templateUrl:"partials/partial-overnight.html"
    });
});
