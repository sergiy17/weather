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
	// Redirects to details & city which was selected
	$scope.goToCity = function(cityId){
		$state.go('/details/:cityId', {'cityId': cityId });
	};

	model.arrOfObj = [];
	model.currentCountry = 'UA';
	model.$onInit = function(){
		fetchCities($http).then(function(cities){
			model.arrOfObj = cities;
		});
	};
	function redirect(selected_item){
		$scope.currentCity = selected_item.value;
		// console.log(selected_item);
		$scope.goToCity($scope.currentCity);
	};
	// Fuse start
		var books = ["Old Man's War","a", "The Lock Artist", "HTML5", "Right Ho Jeeves"];

		var f = new Fuse(books);
		var result = f.search('The');
		// console.log(result);
	// Fuse end

	// 'term' <= what was entered
	function suggest_city(term) {
		// Fuse start
		// var books = ["Old Man's War","a", "The Lock Artist", "HTML5", "Right Ho Jeeves"];
		// var f = new Fuse(books);
		// var result = f.search(term);
		// console.log("+++++++++++++++++++res "+result);
		// console.log(result);
		// Fuse end
		console.log(term);
		var q = term.toLowerCase().trim();
		var results = [];
		var options = {
		  keys: ['name'],
		  threshold: 0.8
		}
		console.log('arr of obj '+model.arrOfObj.length);
	// Find first 10 cities that start with `term`.
		var f = new Fuse(model.arrOfObj, options);

		var results = f.search(q);

		console.log(results.length);
	  // for (var i = 0; i < model.arrOfObj.length && results.length < 15; i++) {
	  //   var city = model.arrOfObj[i];
	  //   console.log(city.name);
	  //   if (city.name.toLowerCase().indexOf(q) === 0)
	  //     results.push({ label: city.name, value:city._id});
	  // }
  	return results;
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
	controller: ["$http","$scope","$state","$timeout", controller]
});
