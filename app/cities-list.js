var module = angular.module('weatherApp');
var bla;
function fetchCities($http){
	return $http.get("/sample.json").then(function(response){
		console.log('in response');
		//console.log(response);
		return response.data;
		
	});
}


function controller($http){
	var model = this;
	model.cities = [];

	model.$onInit = function(){
		fetchCities($http).then(function(cities){
			model.cities = cities;
		});
	};
	// alert("model.cities" );
}

module.component("citiesList",{
	templateUrl:"cities-list.html",
	controllerAs: "model",
	controller: ["$http",controller]
});





// alert(cities);