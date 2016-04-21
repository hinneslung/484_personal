function apiService($http, $rootScope) {

	var apiUrl = "/personal/contact";

	var api = {apiUrl : apiUrl};


    // api.getMedia = function() {
		// return $http.get(apiUrl + 'media');
    // };
    //
    // api.getMediaById = function(id) {
		// return $http.get(apiUrl + 'media/' + id);
    // };
    //
	
	api.submitContact = function(email, name, content) {
		return $http.post(apiUrl,  {email: email, name: name, content: content});
	};

	return api;
}
