app.directive('lowerCase', function () {
	return {
		restrict: 'A',
		require: '^ngModel',
		scope: {
			ngModel: '='
		}
	};
});
