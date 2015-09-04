app.controller('newReviewCtrl', function ($scope, reviewService, $stateParams, $state) {
	$scope.classId = $stateParams.class_id;
	$scope.update = function (review) {
		review.classId = $scope.classId;
		reviewService.addReview(review).then(function (res) {})
	}
})
