function requestToApi($scope, $stateParams, serverSrvc){
		
		// console.log(location);
		var model = this;
		model.weatherCond = "weather conditions";
		model.humidity = "humidity";
		model.windSpeed = "wind speed";
		var allData;
		var tempArr = [];
		var timeArr = [];
		
  	var promice = serverSrvc.getData();
  	promice.then(function(data){
  		$scope.respData = data;
  		// console.log(data);
      model.cityName = $scope.respData.city.name;
      allData = $scope.respData.list.map(function(i){
        return i;
      });
      // console.log(1);
      allData = allData.slice(0,10);
      model.Data = allData;
    	for(var i=0;i<10;i++){
    		var a = data.list[i].dt_txt;
    		a = a.slice(11,16);
    		timeArr.push(a);
    	}

    	timeArr.slice(0,10);

    	for(var i=0;i<10;i++){
    		var arr4temp = [];
    		arr4temp = Math.round(allData[i].main.temp-273);
    		tempArr.push(arr4temp);
    	}

  		var ctx = document.getElementById("myChart");
			// var timeD = ["May 11 00:00","May 11 03:00","May 11 06:00","May 11 09:00","May 11 12:00","May 11 15:00","May 11 18:00","May 11 21:00","May 12 00:00","May 12 03:00"];
				var timeD = timeArr;
				var temperature = [20,26,18,16,18,22,25,29,28,28];
			var myChart = new Chart(ctx, {
			  type: 'bar',
			  data: {
			    labels: timeD,
			    datasets: [{
			      label: 'Temperature for '+model.cityName,
			      data: tempArr,
			      backgroundColor: 'rgba(54, 162, 235, 1)',
			      borderColor: 'rgba(54, 162, 235, 1)',
			      borderWidth: 1
			    }]
			  },
			  options: {
			    scales: {
			      yAxes: [{
			        ticks: {
			          beginAtZero:true
			        }
			      }]
			    }
			  }
			});
		});
		// console.log($scope.respData);
	};
var module = angular.module("weatherLib");
module.component("additionalData",{
	templateUrl:"/additional-data.component.html",
	controllerAs: "model",
	controller: ["$scope","$stateParams","serverSrvc",requestToApi]

}).component("diagram",{
	controller: function() {
	},
	templateUrl: 'diagram/diagram.component.html'
	
}).component("navigation",{
	controller: function(){
	},
	templateUrl: "navigation.component.html"
});
