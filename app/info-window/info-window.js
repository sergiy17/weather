var infoModule = angular.module('weatherLib');

controller = function($scope, $stateParams, serverSrvc){
	var model = this;
	$scope.name = "info-window name";
	model.text = "text";
	// var promice = serverSrvc.getData();
	// promice.then(function(data){
	// 	$scope.responseData = data;
	// };
	// console.log($scope.responseData);
};

infoModule.component("infoWindow",{
	templateUrl:"info-window/info-window.html",
	controllerAs: "model",
	controller: ["$stateParams",controller]
});
