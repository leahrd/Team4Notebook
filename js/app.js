/* Define angular module */
var app = angular.module('myApp', ['ngRoute','ui.router','ngSanitize','ui.bootstrap','ngAnimate']);

/* Routing logic */
app.config(function($routeProvider,$locationProvider) {

  $routeProvider
        .when('/', {
                templateUrl: '../Team4Notebook/partials/home.html',
                controller: 'mainCtrl'
        })
        .when('/log', {
                templateUrl: '../Team4Notebook/partials/log.html',
                controller: 'mainCtrl'
        })
        .when('/entry1', {
                templateUrl: '../Team4Notebook/partials/entry1.html',
                controller: 'mainCtrl'
        })
        .when('/entry2', {
                templateUrl: '../Team4Notebook/partials/entry2.html',
                controller: 'mainCtrl'
        })
	       .when('/entry3', {
                templateUrl: '../Team4Notebook/partials/entry3.html',
                controller: 'mainCtrl'
        })
        .when('/entry3a', {
                templateUrl: '../Team4Notebook/partials/entry3a.html',
                controller: 'mainCtrl'
        })
        .when('/entry4', {
                templateUrl: '../Team4Notebook/partials/entry4.html',
                controller: 'mainCtrl'
        })
        .when('/about', {
                templateUrl: '../Team4Notebook/partials/about.html',
                controller: 'mainCtrl'
        })
        .when('/contact', {
                templateUrl: '../Team4Notebook/partials/contact.html',
                controller: 'mainCtrl'
        })
});
