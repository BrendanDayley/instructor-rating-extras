app.service('classService', function ($http, $q) {

	this.getClasses = function (id) {
		var defer = $q.defer();
		var url = '/api/classes/' + id;
		$http({
			method: 'GET',
			url: url,
		}).then(function (res) {
			defer.resolve(res)
		});
		return defer.promise;
	};

	this.getClassById = function (id) {
		var defer = $q.defer();
		var url = '/api/classes/class/id/' + id;
		$http({
			method: 'GET',
			url: url,
		}).then(function (res) {
			defer.resolve(res);
		});
		return defer.promise;
	};

	this.addClass = function (newClass) {
		var defer = $q.defer();
		var url = 'api/classes';
		$http({
			method: "POST",
			url: url,
			data: JSON.stringify(newClass)
		}).then(function (res) {
			defer.resolve(res);
		});
		return defer.promise;
	};

})
