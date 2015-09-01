app.controller('newTeacherCtrl', function ($scope, teacherService, $stateParams, $state) {

	var universityId = $stateParams.university_id;

	$scope.update = function (teacher) {
		teacher.university = universityId
		teacherService.addTeacher(teacher).then(function (res) {
			$state.go($state.current, {}, {
				reload: true
			});
		});
	}
})