(function(){
  "use strict";

var routerApp = angular.module('weatherApp', ['ngRoute','ui.router', 'weatherLib','weatherCity','ngAnimate']);
routerApp.
  config(function($routeProvider,$stateProvider, $urlRouterProvider, $provide) {
    
  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state('/',{
      url: '/',
      template: '<details-component></details-component>'
    })
    .state('/cities-list',{
      url: '/cities-list/',
      template: '<cities-list></cities-list>'
    })
    // for GPS start
    .state('details',{
      url: '/details?lat&lon',
      template: '<details-component></details-component>'
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
    // for GPS finish
    // for cityId start
    .state('/details/:cityId', {
      url: '/details/:cityId',
      template: '<details-component></details-component>'
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
    })// for cityId finish
    // for '/' start
    .state("/.now",{
      url: "now",
      templateUrl: "partials/partial-now.html"
    })
    .state('/.daily', {
      url: 'daily',
      templateUrl: 'partials/partial-daily.html'
    })
    .state("/.hourly",{
      url: "hourly",
      templateUrl: "partials/partial-hourly.html"
    })
    .state("/.morning",{
      url:"morning",
      templateUrl:"partials/partial-morning.html"
    })
    .state("/.afternoon",{
      url:"afternoon",
      templateUrl:"partials/partial-afternoon.html"
    })
    .state("/.evening",{
      url:"evening",
      templateUrl:"partials/partial-evening.html"
    })  
    .state("/.overnight",{
      url:"overnight",
      templateUrl:"partials/partial-overnight.html"
    })
    // for '/' finish
    // for '/cities-list' start
    .state("/cities-list.now",{
      url: "now",
      templateUrl: "partials/partial-now.html"
    })
    .state('/cities-list.daily', {
      url: 'daily',
      templateUrl: 'partials/partial-daily.html'
    })
    .state("/cities-list.hourly",{
      url: "hourly",
      templateUrl: "partials/partial-hourly.html"
    })
    .state("/cities-list.morning",{
      url:"morning",
      templateUrl:"partials/partial-morning.html"
    })
    .state("/cities-list.afternoon",{
      url:"afternoon",
      templateUrl:"partials/partial-afternoon.html"
    })
    .state("/cities-list.evening",{
      url:"evening",
      templateUrl:"partials/partial-evening.html"
    })  
    .state("/cities-list.overnight",{
      url:"overnight",
      templateUrl:"partials/partial-overnight.html"
    });
    // for '/cities-list' finish
  $provide.decorator('$uiViewScroll', function ($delegate) {
    return function (uiViewElement) {
      var top = uiViewElement.getBoundingClientRect().top;
      window.scrollTo(0, (top - 30));
    }; 
  });
});

})();
