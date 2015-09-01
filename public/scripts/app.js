var app = angular.module('instructorRating', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('home');

	$stateProvider

	//	HOME STATES AND VIEWS ======================================================
		.state('home', {
		url: '/home',
		templateUrl: 'views/home.html',
		controller: 'universityCtrl'
	})

	//	.state('teachers', {
	//		url: '/university/:university_id',
	//		templateUrl: 'views/teacher.html',
	//		controller: 'getTeachersCtrl'
	//	})

	//	.state('teachers.newTeacher', {
	//		templateUrl: 'views/newTeacher.html',
	//		controller: 'newTeacherCtrl'
	//	})

	.state('reviews', {
		url: '/reviews/:class_id',
		templateUrl: 'views/reviews.html',
		controller: 'reviewCtrl'
	})

	.state('createUniversity', {
		url: '/newUniversity',
		templateUrl: 'views/newUniversity.html',
		controller: 'newUniversityCtrl'
	})

	.state('newReview', {
			url: '/newReview/:class_id',
			templateUrl: 'views/newReview.html',
			controller: 'newReviewCtrl'
		})
		.state('classes', {
			url: '/classes/:university_id',
			templateUrl: 'views/class.html',
			controller: 'classCtrl'
		})
		.state('newClass', {
			url: 'classes/:university_id',
			templateUrl: 'views/newclass.html',
			controller: 'newClassCtrl'
		})


});
