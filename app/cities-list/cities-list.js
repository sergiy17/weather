var module = angular.module('weatherCity',['ngSanitize', 'MassAutoComplete', 'ui.router']);

function fetchCities($http){
	return $http.get("/json-city-list/city.list.UA.json").then(function(response){
		return response.data;
	});
}

function controller($http, $scope, $state, $timeout){
	var model = this;
    
	$scope.currentCity;
	$scope.dirty = {};
   
   
    $scope.goToCity = function(cityId){
            console.log('inside goToCity');
            $state.go('/details/:cityId', {'cityId': cityId });
    }
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
            console.log($state.get());
            $scope.goToCity($scope.currentCity);
	};

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
	controller: ["$http","$scope","$state","$timeout", controller]
});
