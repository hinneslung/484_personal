(function() {
    var app = angular.module('storeCommon', []);

	app.directive("storeSkills", function() {
		return {
			restrict: 'E',
			templateUrl: "../templates/skills.html",
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

	app.directive("storeActivities", function() {
		return {
			restrict: 'E',
			templateUrl: "../templates/activities.html",
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
				$scope.email = "";
				$scope.name = "";
				$scope.content = "";

				$scope.sent = false;

				$scope.submit = function() {
					apiService.submitContact($scope.email, $scope.name, $scope.content).success(function(res){
						console.log(res);
						$scope.email = "";
						$scope.name = "";
						$scope.content = "";

						$scope.sent = true;
					});
				}
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
