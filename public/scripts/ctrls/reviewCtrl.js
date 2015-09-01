app.controller('reviewCtrl', function ($scope, reviewService, $stateParams, teacherService, classService) {
	$scope.reviews;

	$scope.classId = $stateParams.class_id;

	var getReviews = function () {
		reviewService.getReviews($scope.classId).then(function (res) {
			$scope.reviews = res.data;
		});
	}();


	classService.getClassById($scope.classId).then(function (res) {
		$scope.class = res.data[0];
		console.log(res.data);
		teacherService.getTeacher($scope.class.teacherId).then(function (res) {
			console.log(res.data);
			$scope.teacher = res.data[0];
		})
	});
})
