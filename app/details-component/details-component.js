var module = angular.module("weatherLib");

module.config(function(serverServiceProvider, $logProvider){
	serverServiceProvider.setLanguage(window.navigator.languages[0]);
	$logProvider.debugEnabled(true);
});

function requestToApi($scope, functionsService, serverService, $log, $timeout){
	var vm = this;
	$scope.respData = {};
		vm.weatherCond = "weather conditions";
		vm.humidity = "humidity";
		vm.windSpeed = "wind speed";
		vm.stateP = functionsService.getStateP();
		$scope.radio = "bar";
		var tempArr = [];
		var timeArr = [];

		$log.debug("weatherLib.requestToApi");
		$timeout(function(){
			if(!vm.stateP.lon && !vm.stateP.cityId){
				functionsService.getLocation().then(function(geoPosition){
					vm.stateP.lat = geoPosition.lat;
					vm.stateP.lon = geoPosition.lon;
					serverService.getData(vm.stateP.lat, vm.stateP.lon, vm.stateP.cityId).then(function(weatherData){
						parseData(weatherData);
					});
				});
			}
			else {
				console.log("with cityId");
				serverService.getData(vm.stateP.lat, vm.stateP.lon, vm.stateP.cityId).then(function(weatherData){
					parseData(weatherData);
				});
			}
		});

	parseData = function(data){
		vm.respData = data;
	  vm.cityName =  vm.respData.city.name;

	  vm.arrOfObj = vm.respData.list.map(function(i){
	    return i;
	  });
	  for(var i=0;i<10;i++){
	  	vm.arrOfObj[i].dt = vm.arrOfObj[i].dt * 1000;
	  }
	  
		for(var i=0;i<10;i++){
			var a = vm.respData.list[i].dt_txt;
			a = a.slice(11,16);
			timeArr.push(a);
		}
		
		for(var i=0;i<10;i++){
			tempArr.push(Math.round(vm.arrOfObj[i].main.temp));
		}

		$scope.$watch('radio', function() {
			var ctx = document.getElementById("myChart").getContext("2d");
			destroy()
			if(myChart){
	      myChart.destroy();
	    }
			var myChart = new Chart(ctx, {
			  type: $scope.radio,
			  data: {
			    labels: timeArr,
			    datasets: [{
			      data: tempArr,
			       backgroundColor: 'rgba(54, 162, 235, 0.7)',
			      borderColor: 'rgba(54, 162, 235, 1)',
			      borderWidth: 1
			    }]
			  },
			  options: {
			  	title: {
            display: true,
            text: 'Temperature for '+vm.cityName
        	},
			  	legend: {
            display: false
        	},
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
