var module = angular.module("weatherLib");

module.service("functionsSrvc",function($q,$stateParams,$log){
	return { 
		getMaxOfArray: function (Arr) {
		  return Math.max.apply(null, Arr);
		},
		getMinOfArray: function (Arr) {
		  return Math.min.apply(null, Arr);
		},
		getLocation : function(){
			var defer = $q.defer();
			navigator.geolocation.getCurrentPosition(function(position) {
		  	defer.resolve({'lat': position.coords.latitude,'lon':position.coords.longitude});
			});
			$log.debug("weatherLib.functionsSrvc.getLocation");
			return defer.promise;
		},
		getStateP : function(){
			return $stateParams;
		}
	}
});
