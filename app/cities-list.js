var module = angular.module('weatherApp');

function fetchCities($http){
	return $http.get("/city.list.json").then(function(response){
		// console.log('in response');
		// console.log(response);
		return response.data;
		
	});
}

function controller($http){
	var model = this;
	model.cities = [];

	model.$onInit = function(){
		fetchCities($http).then(function(cities){
			model.cities = cities;
			model.name = cities.name;
			// model.country = cities.country;
			// console.log(model.cities); //arr of obj
			var arrOfCities = model.cities.map(function(i){
				return i.name;
			});
			// var arrOfCountr = model.cities.map(function(i){
			// 	return i.country;
			// });
			// console.log(arrOfCities);
			// console.log(arrOfCountr);

			model.cityNames = arrOfCities;
			// model.cityCountr = arrOfCountr;
		});
		// console.log(model.cities); //empty arr

	};
	// alert("model.cities" );
	
}

// console.log(arrOfCities); //arr of obj
// console.log(model.cities);

module.component("citiesList",{
	templateUrl:"cities-list.html",
	controllerAs: "model",
	controller: ["$http",controller]
});


// allData = resp.list.map(function(i){
// 	        return i;
// 	      });


// alert(cities);