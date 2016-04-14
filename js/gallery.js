(function() {
	var app = angular.module('storeGallery', []);

	app.controller('GalleryController', function($scope, $rootScope, $routeParams, apiService) {
		$scope.self = $scope;

		$scope.categories = [
			{
				title: "Exploring North Korea - June 2015",
				id: "nk",
				pictures: [
					"Conversation with students in the Kang Pan Sok Revolutionary School",
					"",
					"The train crossing the border between China and the DPRK ",
					"First meal in the hotel",
					"Selfie with North Korea",
					"The famous Korean ginseng chicken soup",
					"Statue of Kim Ul Sung",
					"Conversation with students in the Kang Pan Sok Revolutionary School ",
					"Conversation with foreign language learner in the Grand People’s Study House"]
			},
			{
				title: "Exchange Life in the US - Spring 2016",
				id: "us",
				pictures: [
					"Snow Ball Fight! What a warm welcome",
					"Times Square - redefining light pollution",
					"Looking through Tunnel View @Yosemite Valley",
					"The red-in-color Golden Gate Bridge",
					"Statue of Three Lies - visiting my friend in Boston",
					"Blocking the Ducklings"]
			}
		];

	});
})();
