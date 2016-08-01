var module = angular.module("weatherLib");

module.service("functionsSrvc",function(){
	return { 
		kelvinToCelsius: function (kelv){
			return kelv - 273;
		},
		getMaxOfArray: function (Arr) {
		  return Math.max.apply(null, Arr);
		},
		getMinOfArray: function (Arr) {
		  return Math.min.apply(null, Arr);
		}
	}
});
