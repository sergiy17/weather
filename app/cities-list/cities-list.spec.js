describe('Cities-list component', function() {

	var controller, citiesListController;

	beforeEach(angular.mock.module("ui.router"));
	beforeEach(angular.mock.module("weatherCity"));

	beforeEach(inject(function(_$controller_){
		$controller = _$controller_;
		citiesListController = $controller("citiesListController", {});
	}));


  it("should exist", function(){
  	expect(citiesListController).toBeDefined();
  });

});