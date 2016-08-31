(function(){
	"use strict";

var infoModule = angular.module('weatherLib');

var infoWindowСontroller = function($scope, $stateParams,functionsService, $log){
	var vm = this;

	var setData = function(data){
	 	$log.debug("weatherLib.info-window.setData");
		vm.arr4Temp = [];
		vm.timeArr = [];
		for(var i=0;i<10;i++){
			vm.arr4Temp.push(Math.round(data.list[i].main.temp));
		}
		for(var i=0;i<10;i++){
			var a = data.list[i].dt_txt;
			a = a.slice(11,16);
			vm.timeArr.push(a);
		}
		vm.cityName = data.city.name;
		vm.windSpeedNow = data.list[0].wind.speed;
		vm.tempNow = data.list[0].main.temp;
		vm.maxTmp = functionsService.getMaxOfArray(vm.arr4Temp); //max temperature
		vm.minTmp = functionsService.getMinOfArray(vm.arr4Temp); //minimal temperature
	};
	this.$onChanges = function(changesObj){
		vm.myData = changesObj.respdata.currentValue;
		if(vm.myData != undefined){
			setData(vm.myData);
		}
	};
};

infoModule.component("infoWindow",{
	templateUrl:"info-window/info-window.html",
	controllerAs: "model",
	bindings: {
		respdata : "<"
	},
	controller: ["$scope", "$stateParams", "functionsService","$log",infoWindowСontroller]
});

})();
