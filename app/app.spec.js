describe('WeatherController ', function() {

	var controller, WeatherController;

	beforeEach(angular.mock.module("weatherLib"));

	beforeEach(inject(function(_$controller_){
		$controller = _$controller_;
		WeatherController = $controller("WeatherController", {});
	}));

  it("controller should exist", function(){
  	expect(WeatherController).toBeDefined();
  });

});