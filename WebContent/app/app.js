'use strict';

// main application
var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    
    $routeProvider
    .when('/', {
        templateUrl : 'app/main/main.html',
        controller : 'MainCtrl',
        controllerAs: 'main'
        //resolve : var // relates to promise
    })
    .when('/addempl', {
        templateUrl : 'app/addempl/addempl.html',
        controller : 'AddEmplCtrl',
        controllerAs: 'newempl'
    })
    .when('/editempl', {
        templateUrl : 'app/editempl/editempl.html',
        controller : 'EditEmplCtrl',
        controllerAs: 'editempl'
    })
    .when('/addtime', {
        templateUrl : 'app/addtime/addtime.html',
        controller : 'AddTimeCtrl',
        controllerAs: 'newtime'
    })
    .when('/deltime', {
        templateUrl : 'app/deltime/deltime.html',
        controller : 'DelTimeCtrl',
        controllerAs: 'deltime'
    })

    .otherwise({
        redirectTo : '/'
    });
}]);