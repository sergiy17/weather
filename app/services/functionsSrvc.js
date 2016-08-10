var module = angular.module("weatherLib");

module.service("functionsSrvc",function($q,$stateParams){
	return { 
		getMaxOfArray: function (Arr) {
		  return Math.max.apply(null, Arr);
		},
		getMinOfArray: function (Arr) {
		  return Math.min.apply(null, Arr);
		},
		windowLang: function(){
			return window.navigator.languages[0];
		},
		getLocation : function(){
			var defer = $q.defer();
			navigator.geolocation.getCurrentPosition(function(position) {
		  	defer.resolve({'lat': position.coords.latitude,'lon':position.coords.longitude});
			});
			return defer.promise;
		},
		getStateP : function(){
			return $stateParams;
		}
	}
});
