var module = angular.module("weatherLib");
module.service("serverSrvc",["$q", '$routeParams', function($q, $routeParams){
	return {
		getData : function(){
			var promice = $q.defer();
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function(){
				if(xhttp.readyState == 4 && xhttp.status == 200){
					var resp = JSON.parse(xhttp.responseText);
					promice.resolve(resp);

				}
				// console.log(1);
			}
			xhttp.open("GET", "http://api.openweathermap.org/data/2.5/forecast?id=" + $routeParams.cityId + "&mode=json&appid=0c853911efc43a5ce9db3e839f13abc9", true);
			xhttp.send();
			return promice.promise;
		}
	}
}]);
