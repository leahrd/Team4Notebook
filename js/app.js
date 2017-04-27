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
        .when('/entry5', {
                templateUrl: '../Team4Notebook/partials/entry5.html',
                controller: 'mainCtrl'
        })
        .when('/entry6', {
                templateUrl: '../Team4Notebook/partials/entry6.html',
                controller: 'mainCtrl'
        })
        .when('/entry7', {
                templateUrl: '../Team4Notebook/partials/entry7.html',
                controller: 'mainCtrl'
        })
        .when('/entry8', {
                templateUrl: '../Team4Notebook/partials/entry8.html',
                controller: 'mainCtrl'
        })
        .when('/entry9', {
                templateUrl: '../Team4Notebook/partials/entry9.html',
                controller: 'mainCtrl'
        })
        .when('/entry10', {
                templateUrl: '../Team4Notebook/partials/entry10.html',
                controller: 'mainCtrl'
        })
        .when('/entry11', {
                templateUrl: '../Team4Notebook/partials/entry11.html',
                controller: 'mainCtrl'
        })
        .when('/entry12', {
                templateUrl: '../Team4Notebook/partials/entry12.html',
                controller: 'mainCtrl'
        })
        .when('/entry13', {
                templateUrl: '../Team4Notebook/partials/entry13.html',
                controller: 'mainCtrl'
        })  
        .when('/entry14', {
                templateUrl: '../Team4Notebook/partials/entry14.html',
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
