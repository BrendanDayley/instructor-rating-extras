

app.controller('getTeachersCtrl', function ($scope, teacherService, $stateParams) {
	$scope.teachers;
	$scope.universityId = $stateParams.university_id;
	var getTeachers = function () {
		teacherService.getTeacherById($scope.universityId).then(function (res) {
			$scope.teachers = res.data;
		});
	}();
})