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
	model.arrOfObj = [];
	model.currentCountry = 0;
	var arrOfCountries = [];
	model.$onInit = function(){
		fetchCities($http).then(function(cities){
			model.arrOfObj = cities;
			var arrOfCities = model.arrOfObj.map(function(i){
				return i.name;
			});
			// model.countryList = arrOfCountries;
			// model.cityNames = arrOfCities;
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


// function controller($http){
// 	var model = this;
// 	model.arrOfObj = [];
// 	model.currentCountry = 0;
// 	var arrOfCountries = [];
// 	model.$onInit = function(){
// 		fetchCities($http).then(function(cities){
// 			model.arrOfObj = cities;
// 			var arrOfCities = model.cities.map(function(i){
// 				return i.name;
// 			});
// 			model.countryList = arrOfCountries;
// 			model.cityNames = arrOfCities;
// 		});
// 	};	


// 	$('#selectCountry').on('change', function () {
// 	  var selectValCountr = $("#selectCountry option:selected").val();
	  
// 	});
// }

// module.component("citiesList",{
// 	templateUrl:"cities-list.html",
// 	controllerAs: "model",
// 	controller: ["$http",controller]
// });
