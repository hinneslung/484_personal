(function() {
    var app = angular.module('storeCommon', []);

	app.directive("storeHeader", function() {
		return {
			restrict: 'E',
			templateUrl: "../templates/header.html",
			scope: {
				delegate: '='
			},
			controller: function($window, $rootScope, $scope, $location, apiService) {

			}
		};
	});

	app.directive("storeAbout", function() {
		return {
			restrict: 'E',
			templateUrl: "../templates/about.html",
			scope: {
				delegate: '='
			},
			controller: function($window, $rootScope, $scope, $location, apiService) {

			}
		};
	});

	app.directive("storeResume", function() {
		return {
			restrict: 'E',
			templateUrl: "../templates/resume.html",
			scope: {
				delegate: '='
			},
			controller: function($window, $rootScope, $scope, $location, apiService) {

			}
		};
	});

	app.directive("storePortfolio", function() {
		return {
			restrict: 'E',
			templateUrl: "../templates/portfolio.html",
			scope: {
				delegate: '='
			},
			controller: function($window, $rootScope, $scope, $location, apiService) {

			}
		};
	});

	app.directive("storeBlog", function() {
		return {
			restrict: 'E',
			templateUrl: "../templates/blog.html",
			scope: {
				delegate: '='
			},
			controller: function($window, $rootScope, $scope, $location, apiService) {

			}
		};
	});

	app.directive("storeContact", function() {
		return {
			restrict: 'E',
			templateUrl: "../templates/contact.html",
			scope: {
				delegate: '='
			},
			controller: function($window, $rootScope, $scope, $location, apiService) {

			}
		};
	});

    app.directive("storeFooter", function() {
        return {
            restrict: 'E',
            templateUrl: "../templates/footer.html",
            scope: {
                delegate: '='
            },
            controller: function($window, $rootScope, $scope, $location, apiService) {

            }
        };
    });
})();
