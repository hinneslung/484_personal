(function() {
    var app = angular.module('store',
        ['ngRoute', 'ngAnimate', 'ui.bootstrap',
	        'storeCommon']
    );

	app.factory('apiService', apiService);

	//Routing
	app.config(function ($routeProvider, $locationProvider) {

		$routeProvider
			.when('/', {
				controller: 'HomeController',
				templateUrl: 'views/home.html'
			})
			.otherwise({
				redirectTo: '/'
			});
	});
})();
