var infoModule = angular.module('weatherLib');

controller = function($scope, $stateParams, serverSrvc, functionsSrvc){
	var model = this;

	serverSrvc.getData().then(function(data){
		var arr4Temp = [];
		for(var i=0;i<10;i++){
  		arr4Temp.push(Math.round(functionsSrvc.kelvinToCelsius(data.list[i].main.temp)));
  	}
		var timeArr = [];
		for(var i=0;i<10;i++){
  		var a = data.list[i].dt_txt;
  		a = a.slice(11,16);
  		timeArr.push(a);
  	}
  	model.timeArr = timeArr;
  	model.cityName = data.city.name;
		model.windSpeedNow = data.list[0].wind.speed;
		model.tempNow = Math.round(functionsSrvc.kelvinToCelsius(data.list[0].main.temp));
		model.arr4Temp = arr4Temp;
		model.maxTmp = functionsSrvc.getMaxOfArray(arr4Temp); //max temperature
		model.minTmp = functionsSrvc.getMinOfArray(arr4Temp); //minimal temperature
	});
};

infoModule.component("infoWindow",{
	templateUrl:"info-window/info-window.html",
	controllerAs: "model",
	controller: ["$scope", "$stateParams", "serverSrvc","functionsSrvc",controller]
});
