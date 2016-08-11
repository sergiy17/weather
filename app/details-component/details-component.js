var module = angular.module("weatherLib");
function requestToApi($scope, functionsSrvc,serverSrvc){
	var model = this;
	model.weatherCond = "weather conditions";
	model.humidity = "humidity";
	model.windSpeed = "wind speed";
	model.stateP = functionsSrvc.getStateP();
	var allData;
	var tempArr = [];
	var timeArr = [];
	var promise;
	model.stateP.lat;
	model.stateP.lon;

	if(!model.stateP.lon && !model.stateP.cityId){
		functionsSrvc.getLocation().then(function(geoPosition){
			model.stateP.lat = geoPosition.lat;
			model.stateP.lon = geoPosition.lon;
			promise = serverSrvc.getData(model.stateP.lat, model.stateP.lon, model.stateP.cityId).then(function(data){parseData(data)});;
		});
	}
	// if we have cityId
	else {
		promise = serverSrvc.getData(model.stateP.lat, model.stateP.lon, model.stateP.cityId).then(function(data){parseData(data)});
	}

	parseData = function(data){
	$scope.respData = data;
	model.respData = data;
  model.cityName =  $scope.respData.city.name;
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
		arr4temp = Math.round(allData[i].main.temp);
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

module.config(function(serverSrvcProvider){
	serverSrvcProvider.setLanguage(window.navigator.languages[0]);
});

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
	controller: ["$scope","functionsSrvc","serverSrvc",requestToApi]

}).component("diagram",{
	controller: function() {
	},
	templateUrl: 'diagram/diagram.component.html'
	
}).component("navigation",{
	controller: function(){
	},
	templateUrl: "navigation.component.html"
});
