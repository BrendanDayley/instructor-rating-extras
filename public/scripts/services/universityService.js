app.service('universityService', function ($http, $q) {

	this.getUniversities = function () {
		var defer = $q.defer();
		var url = '/api/universities';
		$http({
			method: 'GET',
			url: url,
		}).then(function (res) {
			defer.resolve(res);
		});
		return defer.promise;
	};

	this.addUniversities = function (newUniversity) {
		var defer = $q.defer();
		var url = '/api/universities';
		$http({
			method: 'POST',
			url: url,
			data: JSON.stringify(newUniversity),
		}).then(function (res) {})
	}

})