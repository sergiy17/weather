var module = angular.module("weatherLib");

module.provider("serverService",function(){
	this.$get = function($q,$log,$http){
		var lang = this.lang;
		return {
			getData : function(lat,lon, cityId){
				var promise = $q.defer();
				if(cityId){
					$http.get('http://api.openweathermap.org/data/2.5/forecast?id=' + cityId + '&mode=json&units=metric&lang='+lang+'&cnt=10&appid=0c853911efc43a5ce9db3e839f13abc9').success(function(data){
						promise.resolve(data);
					});

				}
				else{
					$http.get('http://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&mode=json&units=metric&lang='+lang+'&cnt=10&appid=0c853911efc43a5ce9db3e839f13abc9').success(function(data){
						promise.resolve(data);
					});
				}
				return promise.promise;
			}		
		};
	};

	this.setLanguage = function(language){
		this.lang = language;
	};
});
