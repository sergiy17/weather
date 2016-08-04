var routerApp = angular.module('weatherApp', ['ngRoute','ui.router', 'weatherLib','weatherCity']);
routerApp.
  config(function($routeProvider,$stateProvider, $urlRouterProvider) {
    
  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state('/',{
      url: '/',
      template: '<cities-list></cities-list>'
    })
    // for GPS
    .state('details',{
      url: '/details?lat&lon',
      template: '<additional-data></additional-data>'
    })
    .state("details.now",{
      url: "/now",
      templateUrl: "partials/partial-now.html"
    })
    .state('details.daily', {
      url: '/daily',
      templateUrl: 'partials/partial-daily.html'
    })
    .state("details.hourly",{
      url: "/hourly",
      templateUrl: "partials/partial-hourly.html"
    })
    .state("details.morning",{
      url:"/morning",
      templateUrl:"partials/partial-morning.html"
    })
    .state("details.afternoon",{
      url:"/afternoon",
      templateUrl:"partials/partial-afternoon.html"
    })
    .state("details.evening",{
      url:"/evening",
      templateUrl:"partials/partial-evening.html"
    })  
    .state("details.overnight",{
      url:"/overnight",
      templateUrl:"partials/partial-overnight.html"
    })
    // for GPS
    // for cityId
    .state('/details/:cityId', {
      url: '/details/:cityId',
      template: '<additional-data></additional-data>'
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
    });// for cityId
});
