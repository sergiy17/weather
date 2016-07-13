// (function(){
// 	"use strict";
	var module = angular.module('weatherApp', ['ngRoute']);
	module.config(function($routeProvider){
		$routeProvider
			// .when("/root",{ template: "<root-page></root-page>"});
			// .when("/",{ template: "<cities-list></cities-list>"})
			.when("/",{ template: "<cities-list></cities-list>" })
			.when("/more",{ template: "<more-info></more-info>"})
			.when("/details/:cityName",{ template: "<additional-data></additional-data>"});
			// .otherwise({redirectTo: "/"});

		
			// console.log(cities._id);
	});

	// module.component("rootPage",{
	// 	templateUrl: "root.page.html"
	// });


// }());
// Define the `weatherApp` module

