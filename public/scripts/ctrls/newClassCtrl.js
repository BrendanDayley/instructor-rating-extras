app.controller('newClassCtrl', function ($scope, classService, $stateParams, $state, teacherService) {
	$scope.universityId = $stateParams.university_id;
	$scope.update = function (myClass, teacher) {


		teacher.university = $scope.universityId;
		myClass.universityId = $scope.universityId;


		teacherService.getTeacher(teacher.name).then(function (res) {
			myClass.university = $scope.universityId;
			myClass.teacherId = res.data._id;
			myClass.teacherName = res.data.name;
			console.log(myClass);

			classService.addClass(myClass).then(function (res) {});
		})


	}


});
