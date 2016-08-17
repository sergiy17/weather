var module = angular.module("weatherLib");

module.config(function(serverServiceProvider, $logProvider){
	serverServiceProvider.setLanguage(window.navigator.languages[0]);
	$logProvider.debugEnabled(true);
});

function requestToApi($scope, functionsService,serverService, $log, $timeout){
	var model = this;
	$scope.respData = {};
		model.weatherCond = "weather conditions";
		model.humidity = "humidity";
		model.windSpeed = "wind speed";
		model.stateP = functionsService.getStateP();
		var tempArr = [];
		var timeArr = [];
		var promise;
		model.stateP.lat;
		model.stateP.lon;
		$log.debug("weatherLib.requestToApi");
		$timeout(function(){
			if(!model.stateP.lon && !model.stateP.cityId){
				functionsService.getLocation().then(function(geoPosition){
					model.stateP.lat = geoPosition.lat;
					model.stateP.lon = geoPosition.lon;
					serverService.getData(model.stateP.lat, model.stateP.lon, model.stateP.cityId).then(function(weatherData){
						parseData(weatherData);
					});
				});
			}
			else {
				console.log("with cityId");
				serverService.getData(model.stateP.lat, model.stateP.lon, model.stateP.cityId).then(function(weatherData){
					parseData(weatherData);
				});
			}
		});

	parseData = function(data){
		model.respData = data;
	  model.cityName =  model.respData.city.name;
	  model.Data = model.respData.list.map(function(i){
	    return i;
	  });

	  for(var i=0;i<10;i++){
	  	model.Data[i].dt = model.Data[i].dt * 1000;
	  }
	  
		for(var i=0;i<10;i++){
			var a = model.respData.list[i].dt_txt;
			a = a.slice(11,16);
			timeArr.push(a);
		}
		
		timeArr.slice(0,10);

		for(var i=0;i<10;i++){
			var arr4temp = [];
			arr4temp = Math.round(model.Data[i].main.temp);
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
	// angular.copy(this.cityName,model.cityName);
	};
};

module.run(function($rootScope){
  $rootScope
    .$on('$stateChangeStart', 
      function(event, toState, toParams, fromState, fromParams){ 
        $("#ui-view").html("");
        $(".page-loading").removeClass("hidden");
    });
  $rootScope
    .$on('$stateChangeSuccess',
      function(event, toState, toParams, fromState, fromParams){ 
        $(".page-loading").addClass("hidden");
    });
});

module.component("detailsComponent",{
	templateUrl:"details-component/details-component.html",
	controllerAs: "model",
	controller: ["$scope","functionsService","serverService", "$log","$timeout",requestToApi]

}).component("diagram",{
	controller: function() {
	},
	templateUrl: 'diagram/diagram.component.html'
	
}).component("navigation",{
	controller: function(){
	},
	templateUrl: "navigation.component.html"
});
