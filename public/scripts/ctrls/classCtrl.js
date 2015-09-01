app.controller('classCtrl', function ($scope, classService, $stateParams) {
	$scope.classes;
	$scope.universityId = $stateParams.university_id;
	var getClasses = function () {
		classService.getClasses($scope.universityId).then(function (res) {
			$scope.classes = res.data;
		});
	}();
});
