// (function(){
// 	"use strict";
	var module = angular.module('weatherApp', ['ngRoute']);
	module.config(function($routeProvider){
		$routeProvider
			// .when("/root",{ template: "<root-page></root-page>"});
			// .when("/",{ template: "<cities-list></cities-list>"})
			.when("/cities-list",{ template: "<cities-list></cities-list>" })
			.when("/details",{ template: "<additional-data></additional-data>"});
		
			
	});

	// module.component("rootPage",{
	// 	templateUrl: "root.page.html"
	// });


// }());
// Define the `weatherApp` module

