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
var promise;
module.service("geoLocSrvc",["$q",function($q){
	return{
		getLocation: function() {
			function showPosition(position){
				console.log("Lat: " + position.coords.latitude +" Long: " + position.coords.longitude );
				promise = $q.defer();
				var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function(){
					if(xhttp.readyState == 4 && xhttp.status == 200){
						var resp = JSON.parse(xhttp.responseText);
						promise.resolve(resp);
					}
				}
				xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?lat="+position.coords.latitude+"&lon=" + position.coords.longitude + "&mode=json&appid=0c853911efc43a5ce9db3e839f13abc9", true);
				xhttp.send();
				// console.log(promise.promise);
				// return promise.promise;
				// console.log(promise);
			}
	    if (navigator.geolocation) {
	    		navigator.geolocation.getCurrentPosition(showPosition)
	    } else {
	        x.innerHTML = "Geolocation is not supported by this browser.";
	    }
	    // console.log(promise.promise);
	    return promise.promise;
		}	
	}
}]);
