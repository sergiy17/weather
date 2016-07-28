function requestToApi($scope, $stateParams, serverSrvc){
		
	var model = this;
	model.weatherCond = "weather conditions";
	model.humidity = "humidity";
	model.windSpeed = "wind speed";
	var allData;
	var tempArr = [];
	var timeArr = [];
		
	var promise = serverSrvc.getData();
		promise.then(function(data){
		$scope.respData = data;
    model.cityName = $scope.respData.city.name;
    allData = $scope.respData.list.map(function(i){
      return i;
    });
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
		var timeD = timeArr;
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
		//$scope.$apply();
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
