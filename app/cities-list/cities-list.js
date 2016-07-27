var module = angular.module('weatherCity',['ngSanitize', 'MassAutoComplete']);

function fetchCities($http){
	return $http.get("/json-city-list/city.list.UA.json").then(function(response){
		return response.data;
	});
}

function controller($http, $scope, $routeParams, $location){
	var model = this;
	$scope.currentCity;
	$scope.dirty = {};
	model.arrOfObj = [];
	model.currentCountry = 'UA';
	model.$onInit = function(){
		fetchCities($http).then(function(cities){
			model.arrOfObj = cities;
		});
	};
// +++++++++++++++++++++++++++++++++++
	function redirect(selected_item){
		$scope.currentCity = selected_item.value;
			// $location.path("/details/"+selected_item.value,false);
	};

	$scope.$watch('currentCity', function(arg){
		$location.path("/details/"+arg);
	});

  function suggest_city(term) {
	  var q = term.toLowerCase().trim();
	  var results = [];
// console.log(results);
  // Find first 10 cities that start with `term`.
	  for (var i = 0; i < model.arrOfObj.length && results.length < 10; i++) {
	    var city = model.arrOfObj[i];
	    if (city.name.toLowerCase().indexOf(q) === 0)
	      results.push({ label: city.name, value:city._id});
	  }

  	return results;
  }	
  $scope.autocomplete_options = {
  	suggest:suggest_city,
  	on_select:redirect
  };

};

module.component("citiesList",{
	templateUrl:"cities-list/cities-list.html",
	controllerAs: "model",
	controller: ["$http","$scope","$location",controller]
});
