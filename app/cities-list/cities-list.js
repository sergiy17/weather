(function(){
	"use strict";
var module = angular.module('weatherCity',['ngSanitize', 'MassAutoComplete', 'ui.router']);

function fetchCities($http){
	return $http.get("/json-city-list/city.list.UA.json").then(function(response){
		return response.data;
	});
}
function citiesListController($http, $scope, $state, $log){
	$log.debug("weatherCity.citiesListController");
	var vm = this;
	$scope.currentCity;
	$scope.dirty = {};
	// Redirects to details & city which was selected
	$scope.goToCity = function(cityId){
		$state.go('/details/:cityId', {'cityId': cityId });
	};
	var lat = 0;
	var lon = 0;
	// 'gpsCity' <= takes our cordinates
	vm.gpsCity = function(){
		navigator.geolocation.getCurrentPosition(function(position) {
	  	lat = position.coords.latitude;
	  	lon = position.coords.longitude;
			$state.go('details', {'lat': lat,'lon':lon});
		});
	};

	vm.arrOfObj = [];
	vm.currentCountry = 'UA';
	vm.$onInit = function(){
		fetchCities($http).then(function(cities){
			vm.arrOfObj = cities;
		});
	};
	function redirect(selected_item){
		$scope.currentCity = selected_item.value;
		$scope.goToCity($scope.currentCity);
	};
	// 'term' <= what was entered
	function suggest_city(term) {
		var q = term.toLowerCase().trim();
		var results = [];
		var options = {
		  keys: ['name'],
		  id: name,
		  threshold: 0.1
		}
	// Find first 10 cities that start with `term`.
		var f = new Fuse(vm.arrOfObj, options);
		var resCities = [];
		var results = f.search(q);
		for(var ii=0;ii<results.length && resCities.length < 10;ii++){
			resCities.push({label: results[ii].name, value:results[ii]._id});
		};
  	return resCities;
  };
  // 'suggest_city' <= Entered value
  // 'on_select:redirect' <= Direction of redirecting while click on link
  $scope.autocomplete_options = {
  	suggest:suggest_city,
  	on_select:redirect
  };
};

module.component("citiesList",{
	templateUrl:"cities-list/cities-list.html",
	controllerAs: "model",
	controller: ["$http","$scope","$state","$log", citiesListController]
});

})();
