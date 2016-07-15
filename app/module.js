var module = angular.module('weatherApp', ['ngRoute', 'weatherLib']);
module.config(function($routeProvider){
	$routeProvider
		.when("/",{ template: "<cities-list></cities-list>" })
		.when("/more",{ template: "<more-info></more-info>"})
		.when("/details/:cityId",{ template: "<additional-data></additional-data>"})
		.otherwise({redirectTo: "/"});
});
