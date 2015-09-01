app.controller('newUniversityCtrl', function ($scope, universityService) {


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