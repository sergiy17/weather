var infoModule = angular.module('weatherLib');

controller = function($scope, $stateParams,functionsSrvc, $log){
	var model = this;

	 setData = function(data){
	 	$log.debug("weatherLib.info-window.setData");
		var arr4Temp = [];
		for(var i=0;i<10;i++){
			arr4Temp.push(Math.round(data.list[i].main.temp));
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
		model.tempNow = data.list[0].main.temp;
		model.arr4Temp = arr4Temp;
		model.maxTmp = functionsSrvc.getMaxOfArray(arr4Temp); //max temperature
		model.minTmp = functionsSrvc.getMinOfArray(arr4Temp); //minimal temperature
	};
	this.$onChanges = function(changesObj){
		model.myData = changesObj.respdata.currentValue;
		if(model.myData != undefined){
			setData(model.myData);
		}
	};
};

infoModule.component("infoWindow",{
	templateUrl:"info-window/info-window.html",
	controllerAs: "model",
	bindings: {
		respdata : "<"
	},
	controller: ["$scope", "$stateParams", "functionsSrvc","$log",controller]
});
