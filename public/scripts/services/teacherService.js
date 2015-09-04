app.service('teacherService', function ($http, $q) {

	this.getTeachers = function () {
		var defer = $q.defer();
		var url = '/api/teachers';
		$http({
			method: 'GET',
			url: url,
		}).then(function (res) {
			defer.resolve(res);
		});
		return defer.promise;
	};

	this.getTeacherById = function (id) {
		var defer = $q.defer();
		var url = '/api/teachers/' + id;
		$http({
			method: 'GET',
			url: url,
		}).then(function (res) {
			defer.resolve(res);
		});
		return defer.promise;
	}

	this.addTeacher = function (teacher) {
		var defer = $q.defer();
		var url = '/api/teachers';
		$http({
			method: 'POST',
			url: url,
			data: JSON.stringify(teacher),
		}).then(function (res) {
			defer.resolve(res);
		});
		return defer.promise;
	};

	this.getTeacher = function (id) {
		var defer = $q.defer();
		var url = '/api/teachers/teacher_name/' + id;
		$http({
			method: 'GET',
			url: url,
		}).then(function (res) {
			defer.resolve(res);
		});
		return defer.promise;
	};
})
