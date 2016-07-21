var module = angular.module('weatherLib');

function fetchCities($http){
	return $http.get("/city.list.json").then(function(response){
		return response.data;
	});
}

function controller($http, $routeParams){
	var model = this;
	model.arrOfObj = [];
	model.currentCountry = 'UA';
	model.$onInit = function(){
		fetchCities($http).then(function(cities){
			model.arrOfObj = cities;
		});
	};	
}

module.component("citiesList",{
	templateUrl:"cities-list/cities-list.html",
	controllerAs: "model",
	controller: ["$http",controller]
});
