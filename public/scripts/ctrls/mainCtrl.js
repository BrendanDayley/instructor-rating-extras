app.controller('universityCtrl', function ($scope, universityService, teacherService) {
	$scope.universities;
	//	$scope.setUniversityId = function (id) {
	//		teacherService.setId(id);
	//	}
	var getUniversities = function () {
		universityService.getUniversities().then(function (res) {
			$scope.universities = res.data;
		});
	}()
})



.controller('getTeachersCtrl', function ($scope, teacherService, $stateParams) {
	$scope.teachers;
	$scope.universityId = $stateParams.university_id;
	var getTeachers = function () {
		teacherService.getTeacherById($scope.universityId).then(function (res) {
			$scope.teachers = res.data;
		});
	}();
})


.controller('classCtrl', function ($scope, reviewService) {})


.controller('reviewCtrl', function ($scope, reviewService, $stateParams, teacherService) {
	$scope.reviews
	$scope.teacherId = $stateParams.teacher_id;
	console.log($scope.teacherId);
	$scope.teacher;
	teacherService.getTeacher($scope.teacherId).then(function (res) {
		$scope.teacher = res.data[0];
	});
	var getReviews = function () {
		reviewService.getReviews($scope.teacherId).then(function (res) {
			$scope.reviews = res.data;
		});
	}();
})







.controller('newUniversityCtrl', function ($scope, universityService) {


	$scope.update = function (school) {

		universityService.addUniversities(school);
	};

	$scope.reset = function (form) {
		if (form) {
			form.$setPristine();
			form.$setUntouched();
		};
	};

	$scope.reset();
})

.controller('newTeacherCtrl', function ($scope, teacherService, $stateParams, $state) {

	var universityId = $stateParams.university_id;


	console.log(universityId);


	$scope.update = function (teacher) {
		teacher.university = universityId
		console.log(teacher);
		teacherService.addTeacher(teacher).then(function (res) {
			$state.go($state.current, {}, {
				reload: true
			});
		});
	}
})

.controller('newReviewCtrl', function ($scope, reviewService, $stateParams, $state) {
	console.log('new review ctrl says hello');
	$scope.teacherId = $stateParams.teacher_id;
	$scope.update = function (review) {
		review.teacherId = $scope.teacherId;
		console.log(review);
		reviewService.addReview(review).then(function (res) {
			$state.go($state.current, {}, {
				reload: true
			});
		});
	}
})
