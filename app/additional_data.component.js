angular
	.module('weatherApp')
	.component('additionalData',{
		template: '<div class="col-md-4">' +
          '<ul class="list-group orange"> '+
          '<h4 class="list-heading text-uppercase">weather conditions</h4>'+
            '<li class="list-group-item nopadding" ng-repeat="datum in Data">'+
              '<div class="row weatherList">'
                '<div class="col-xs-7"><h4>{{ datum.dt | date: 'MMM d,  hh:mm' }}</h4></div>'+
               ' <div class="col-xs-5"><h4>{{ datum.weather[0].main }}</h4></div>'+
              '</div>'+
            '</li>'+
          '</ul>'+
        '</div>'
	});

	angular.
  module('phonecatApp').
  component('phoneList', {
    template: '<ul>' + '<li ng-repeat="phone in $ctrl.phones">' +
            '<span>{{phone.name}}</span>' +
            '<p>{{phone.snippet}}</p>' +
          '</li>' +
        '</ul>',
    controller: function PhoneListController() {
      this.phones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.'
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.'
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.'
        }
      ];
    }
  });