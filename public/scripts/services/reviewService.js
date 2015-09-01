app.service('reviewService', function ($http, $q) {

	this.getReviews = function (id) {
		var defer = $q.defer();
		var url = '/api/reviews/' + id;
		$http({
			method: 'GET',
			url: url,
		}).then(function (res) {
			defer.resolve(res);
		});
		return defer.promise;
	};
	this.addReview = function (review) {
		var defer = $q.defer();
		var url = '/api/reviews';
		$http({
			method: 'POST',
			url: url,
			data: JSON.stringify(review),
		}).then(function (res) {
			defer.resolve(res);
		});
		return defer.promise;
	};
})
