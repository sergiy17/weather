var module = angular.module('weatherLib');

function fetchCities($http){
	return $http.get("/city.list.json").then(function(response){
		return response.data;
	});
}

function controller($http, $routeParams){

	var model = this;
	model.arrOfObj = [];
	model.currentCountry = 0;
	model.$onInit = function(){
		fetchCities($http).then(function(cities){
			model.arrOfObj = cities;
		});
	};	

	$('#selectCountry').on('change', function () {
	  var selectValCountr = $("#selectCountry option:selected").val();
	  
	});
}

module.component("citiesList",{
	templateUrl:"cities-list.html",
	controllerAs: "model",
	controller: ["$http",controller]
});
