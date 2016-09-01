describe('component: cities-list', function() {

	var $componentController;


	beforeEach(module("weatherCity"));
	beforeEach(angular.mock.module("ngSanitize"));
	beforeEach(angular.mock.module("MassAutoComplete"));
	beforeEach(angular.mock.module("ui.router"));

	beforeEach(inject(function(_$componentController_){
		$componentController = _$componentController_;
		// citiesListController = $controller("citiesListController", {});
	}));

	// console.log($componentController);

  it("citiesListController should exist", function(){

  	console.log($componentController);
  	// var bindings = {hero: {name: 'Wolverine'}};
  	var ctrl = $componentController('citiesListController', {});
  	expect(ctrl).toBeDefined();
  });

});