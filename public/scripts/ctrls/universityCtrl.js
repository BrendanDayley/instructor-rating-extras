app.controller('universityCtrl', function ($scope, universityService) {
	$scope.universities;
	var getUniversities = function () {
		universityService.getUniversities().then(function (res) {
			$scope.universities = res.data;
		});
	}()
})
