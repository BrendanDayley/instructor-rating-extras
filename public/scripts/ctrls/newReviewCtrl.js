app.controller('newReviewCtrl', function ($scope, reviewService, $stateParams, $state) {
	$scope.classId = $stateParams.class_id;
	console.log($scope.classId);
	$scope.update = function (review) {
		review.classId = $scope.classId;
		reviewService.addReview(review).then(function (res) {
			$state.go($state.current, {}, {
				reload: true
			});
		});
	}
})
