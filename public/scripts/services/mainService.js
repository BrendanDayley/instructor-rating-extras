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


.service('teacherService', function ($http, $q) {

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
			var url = '/api/teachers/teacher_id/' + id;
			$http({
				method: 'GET',
				url: url,
			}).then(function (res) {
				defer.resolve(res);
			});
			return defer.promise;
		};
	})
	.service('reviewService', function ($http, $q) {

		this.getReviews = function (id) {
			var defer = $q.defer();
			var url = '/api/reviews/' + id;
			$http({
				method: 'GET',
				url: url,
			}).then(function (res) {
				defer.resolve(res);
			});
			return defer.promise;
		};
		this.addReview = function (review) {
			var defer = $q.defer();
			var url = '/api/reviews';
			$http({
				method: 'POST',
				url: url,
				data: JSON.stringify(review),
			}).then(function (res) {
				defer.resolve(res);
			});
			return defer.promise;
		};
	})





.service('classService', function ($http, $q) {

	this.getClasses = function () {
		return [{
			name: 'potions',
			teacherId: 1,
			classId: 394,
			schoolId: "un1v3rs1ty",
		}]
	};

})
