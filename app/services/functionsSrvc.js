var module = angular.module("weatherLib");

module.service("functionsSrvc",function(){
	return { 
		getMaxOfArray: function (Arr) {
		  return Math.max.apply(null, Arr);
		},
		getMinOfArray: function (Arr) {
		  return Math.min.apply(null, Arr);
		},
		windowLang: function(){
			return window.navigator.language;
		} 
	}
});
