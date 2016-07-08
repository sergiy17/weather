// var allData;
// var tempArr = [];
// var someData;
weatherApp.controller('WeatherController',function WeatherController($scope){
	// $scope.test = "test";
	// $scope.allData = [{main: {humidity: 12}}];
	// console.log("scope:", $scope);
	// var xhttp = new XMLHttpRequest();

 //  xhttp.onreadystatechange = function() {
 //    if (xhttp.readyState == 4 && xhttp.status == 200) {
 //      var resp = JSON.parse(xhttp.responseText);
 //      allData = resp.list.map(function(i){
 //        return i;
 //      });
 //      allData = allData.slice(0,10);
 //      $scope.Data = allData;
      
 //      // console.log(allData[0].main.humidity);
 //      	for(i=0;i<10;i++){
 //      		var arr4temp = [];
 //      		arr4temp = Math.round(allData[i].main.temp-273);
 //      		tempArr.push(arr4temp);

 //      		// tempArr = allData[i].main.humidity;
 //      		// console.log(tempArr);
 //      	}
      	// console.log("it's s: "+i);
     //  		var ctx = document.getElementById("myChart");
					// var timeD = ["Maay 11 00:00","May 11 03:00","May 11 06:00","May 11 09:00","May 11 12:00","May 11 15:00","May 11 18:00","May 11 21:00","May 12 00:00","May 12 03:00"];
					// var temperature = [20,26,18,16,18,22,25,29,28,28];
					// var myChart = new Chart(ctx, {
					//   type: 'bar',
					//   data: {
					//     labels: timeD,
					//     datasets: [{
					//       label: 'Temperature',
					//       data: tempArr,
					//       backgroundColor: 'rgba(54, 162, 235, 1)',
					//       borderColor: 'rgba(54, 162, 235, 1)',
					//       borderWidth: 1
					//     }]
					//   },
					//   options: {
					//     scales: {
					//       yAxes: [{
					//         ticks: {
					//           beginAtZero:true
					//         }
					//       }]
					//     }
					//   }
					// });
      	
					// $scope.$apply();
  //   }
  // };
  // xhttp.open("GET", "http://api.openweathermap.org/data/2.5/forecast?q=Kyiv,us&mode=json&appid=0c853911efc43a5ce9db3e839f13abc9", true);
  // xhttp.send();
	// $('#selectCity').on('change', function () {
	// 	tempArr = [];
	//   var selectVal = $("#selectCity option:selected").val();
	//   xhttp.open("GET", "http://api.openweathermap.org/data/2.5/forecast?q=" + selectVal + ",us&mode=json&appid=0c853911efc43a5ce9db3e839f13abc9", true);
 //  	xhttp.send();
 //  	// $scope.$apply(	);


	// });
});
	
