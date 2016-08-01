var module = angular.module("weatherLib");
module.service("serverSrvc",["$q", '$stateParams', function($q, $stateParams){
	return {
		getData : function(){
			var promise = $q.defer();
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function(){
				if(xhttp.readyState == 4 && xhttp.status == 200){
					var resp = JSON.parse(xhttp.responseText);
					promise.resolve(resp);
				}
			}
			// console.log($stateParams.log);, 

			if($stateParams.lat){
				xhttp.open("GET", "http://api.openweathermap.org/data/2.5/forecast?lat=" + $stateParams.lat + "&lon=" + $stateParams.lon + "&mode=json&appid=0c853911efc43a5ce9db3e839f13abc9", true);
				xhttp.send();
											// console.log(promise.promise)

				return promise.promise;
			}
			else{
			// if($stateParams.lat){}
			xhttp.open("GET", "http://api.openweathermap.org/data/2.5/forecast?id=" + $stateParams.cityId + "&mode=json&appid=0c853911efc43a5ce9db3e839f13abc9", true);
			xhttp.send();

			return promise.promise;
			}
		}
	}
}]);
