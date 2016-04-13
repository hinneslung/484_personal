function apiService($http, $rootScope) {

	var apiUrl = "http://45.115.39.208/api/";

	var api = {apiUrl : apiUrl};


    //-----------------------------------------------------------------------------Media
	api.getMedia = function() {
		return $http.get(apiUrl + 'media');
	};

	api.getMediaById = function(id) {
		return $http.get(apiUrl + 'media/' + id);
	};
	api.updateProduct = function(id, name, price) {
		return $http.post(apiUrl + 'media', {id:id, name:name, price:price});
	};


	return api;
}
