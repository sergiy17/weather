var module = angular.module("weatherLib");
module.service("serverSrvc",["$q", function($q){
	return {
		getData : function(lat,lon, cityId, lang){
			var promise = $q.defer();
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function(){
				if(xhttp.readyState == 4 && xhttp.status == 200){
					var resp = JSON.parse(xhttp.responseText);
					promise.resolve(resp);
				}
			}
			if(cityId){
				xhttp.open("GET", "http://api.openweathermap.org/data/2.5/forecast?id=" + cityId + "&mode=json&units=metric&lang="+lang+"&appid=0c853911efc43a5ce9db3e839f13abc9", true);
				xhttp.send();
				return promise.promise;
			}
			else{
				xhttp.open("GET", "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&mode=json&units=metric&lang="+lang+"&appid=0c853911efc43a5ce9db3e839f13abc9", true);
				xhttp.send();
			return promise.promise;
			}
		}
	}
}]);

// module.provider("serverSrvc",["$q",{
// 	getData : function(lat,lon, cityId, lang){
// 			var promise = $q.defer();
// 			var xhttp = new XMLHttpRequest();
// 			xhttp.onreadystatechange = function(){
// 				if(xhttp.readyState == 4 && xhttp.status == 200){
// 					var resp = JSON.parse(xhttp.responseText);
// 					promise.resolve(resp);
// 				}
// 			}
// 			if(cityId){
// 				xhttp.open("GET", "http://api.openweathermap.org/data/2.5/forecast?id=" + cityId + "&mode=json&units=metric&lang="+lang+"&appid=0c853911efc43a5ce9db3e839f13abc9", true);
// 				xhttp.send();
// 				return promise.promise;
// 			}
// 			else{
// 				xhttp.open("GET", "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&mode=json&units=metric&lang="+lang+"&appid=0c853911efc43a5ce9db3e839f13abc9", true);
// 				xhttp.send();
// 			return promise.promise;
// 			}
// 		}
// }]);