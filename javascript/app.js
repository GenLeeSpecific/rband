// create the module and name it mainApp
// also include ngRoute for all our routing needs
angular.module('routingApp', ['ngRoute','routingControllers']);
// configure our routes
angular.module('routingApp').config(function($routeProvider) {
	$routeProvider
		// route for the home page
		.when('/', {
			templateUrl : 'templates/home.html',
			controller  : 'HomeController'
		})
		// route for the about page
		.when('/about', {
			templateUrl : 'templates/about.html',
			controller  : 'AboutController'
		})
		// route for the contact page
		.when('/contact', {
			templateUrl : 'templates/contact.html',
			controller  : 'ContactController'
		})
		.when('/OurMusic', {
			templateUrl : 'templates/OurMusic.html',
			controller  : 'MusicController'
		})
		.when('/MembersBios', {
			templateUrl : 'templates/MembersBios.html',
			controller  : 'BiosController'
		})
		.when('/UpcomingGigs', {
			templateUrl : 'templates/UpcomingGigs.html',
			controller  : 'UpcomingController'
		})
		.when('/WeddingsAndCorporate', {
			templateUrl : 'templates/WeddingsAndCorporate.html',
			controller  : 'GigsController'
		})
		.when('/ContactAndBookings', {
			templateUrl : 'templates/ContactAndBookings.html',
			controller  : 'ContactAndBookingsController'
		})
		.otherwise({redirectTo: '/'}); ;
});

	
	