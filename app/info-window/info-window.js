var infoModule = angular.module('weatherLib');

controller = function($scope, $stateParams, serverSrvc){
	var model = this;
	model.name = "model.name!";
	var promice = serverSrvc.getData();
	promice.then(function(data){
		$scope.responseData = data;
		model.cityName = $scope.responseData.city.name;
		model.windSpeedNow = $scope.responseData.list[0].wind.speed;
		model.tempNow = Math.round($scope.responseData.list[0].main.temp-273);
		var arr4Temp = [];
		for(var i=0;i<10;i++){
  		arr4Temp.push(Math.round($scope.responseData.list[i].main.temp-273));
  	}
  	function getMaxOfArray(numArray) {
		  return Math.max.apply(null, numArray);
		}
		function getMinOfArray(numArray) {
		  return Math.min.apply(null, numArray);
		}
		model.highrT = getMaxOfArray(arr4Temp);
		model.minTem = getMinOfArray(arr4Temp);
		model.arr4Temp = arr4Temp;
		var timeArr = [];
		for(var i=0;i<10;i++){
  		var a = data.list[i].dt_txt;
  		a = a.slice(11,16);
  		timeArr.push(a);
  	}
  	model.timeArr = timeArr;
		console.log(timeArr);
		// console.log(Math.round($scope.responseData.list[0].main.temp-273));
		// console.log($scope.responseData.list[0].wind.speed);
	});
};

infoModule.component("infoWindow",{
	templateUrl:"info-window/info-window.html",
	controllerAs: "model",
	controller: ["$scope", "$stateParams", "serverSrvc",controller]
});
