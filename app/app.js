// Define the `weatherApp` module
var weatherApp = angular.module('weatherApp', []);
var allData;
weatherApp.controller('WeatherController',function WeatherController($scope){
	$scope.test = "test";
	$scope.speeds = [{main: {humidity: 12}}];
	console.log("scope:", $scope);
	
	$('#selectCity').on('change', function () {
	  var selectVal = $("#selectCity option:selected").val();
	  var xhttp = new XMLHttpRequest();

	  xhttp.onreadystatechange = function() {
	    if (xhttp.readyState == 4 && xhttp.status == 200) {
	      var resp = JSON.parse(xhttp.responseText);
	      // console.log(resp);
	      
	      allData = resp.list.map(function(i){
	        return i;
	      });
	      console.log("alldata:", allData);
	      allData = allData.slice(0,10);
	      // console.log("scope:", $scope);
	      $scope.speeds = allData;
	      $scope.$apply();
	      // targWind = resp.list.map(function(i){
	      //   return i.wind.speed;
	      // });
	      // targWind = targWind.slice(0,10);
	      // var humidity = allData.main.humidity;
	      console.log(allData[0].main.humidity);
	      console.log(allData[0].weather[0].id);
	      console.log(allData[0].weather.id);
	      console.log(selectVal);
	      // console.log($scope.speeds);
	      // $scope.data = allData[0].main.humidity;
	      // console.log($scope.data);
	      
	    }
	  };
	  xhttp.open("GET", "http://api.openweathermap.org/data/2.5/forecast?q=" + selectVal + ",us&mode=json&appid=0c853911efc43a5ce9db3e839f13abc9", true);
	  xhttp.send();

	});

	//$scope.speeds = allData;
});