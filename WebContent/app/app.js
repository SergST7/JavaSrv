'use strict';

// main application
var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    
    $routeProvider
    .when('/', {
        templateUrl : 'app/view1main/main.html',
        controller : 'MainCtrl',
        controllerAs: 'main'
        //resolve : var // relates to promise
    })
    .when('/addempl', {
        templateUrl : 'app/view2addempl/addempl.html',
        controller : 'AddEmplCtrl',
        controllerAs: 'newempl'
    })
    .when('/editempl', {
        templateUrl : 'app/view3editempl/editempl.html',
        controller : 'EditEmplCtrl',
        controllerAs: 'editempl'
    })
    .when('/addtime', {
        templateUrl : 'app/view4addtime/addtime.html',
        controller : 'AddTimeCtrl',
        controllerAs: 'newtime'
    })
    .when('/deltime', {
        templateUrl : 'app/view5deltime/deltime.html',
        controller : 'DelTimeCtrl',
        controllerAs: 'deltime'
    })

    .otherwise({
        redirectTo : '/'
    });
}]);