var module = angular.module("weatherLib");

module.provider("serverSrvc",function(){
	this.$get = function($q,$log){
		var lang = this.lang;
		return {
			getData : function(lat,lon, cityId){
				var promise = $q.defer();
				var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function(){
					if(xhttp.readyState == 4 && xhttp.status == 200){
						var resp = JSON.parse(xhttp.responseText);
						promise.resolve(resp);
					}
				}
				$log.debug("weatherLib.serverSrvc.$get");
				if(cityId){
					xhttp.open("GET", "http://api.openweathermap.org/data/2.5/forecast?id=" + cityId + "&mode=json&units=metric&lang="+lang+"&cnt=10&appid=0c853911efc43a5ce9db3e839f13abc9", true);
					xhttp.send();
					return promise.promise;
				}
				else{
					xhttp.open("GET", "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&mode=json&units=metric&lang="+lang+"&cnt=10&appid=0c853911efc43a5ce9db3e839f13abc9", true);
					xhttp.send();
				return promise.promise;
				}
			}		
		}
	};

	this.setLanguage = function(language){
		this.lang = language;
	};
});
