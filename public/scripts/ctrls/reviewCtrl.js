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
		teacherService.getTeacher($scope.class).then(function (res) {
			$scope.teacher = res.data[0];
		})
	});
})
