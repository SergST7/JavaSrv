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





app.controller('MainController', ['$scope', '$http', function($scope, $http) {

             /* ------ Add new tracking time ------ */
             $scope.toShowAddTime = false;
             $scope.addNewTime = function(index) {
                 
                 $scope.employeeToAddTime = $scope.employees[index];

                 if ($scope.toShowEdit == true) {
                     $scope.toShowEdit = false;
                 }
                 if ($scope.toShowAdd == true) {
                     $scope.toShowAdd = false;
                 }
                 $scope.toShowAddTime = true;
                 
             };
             
             $scope.timeNewCancel = function() {
                 $scope.toShowAddTime = false;
                 this.getAllEmployees();
             };
             $scope.timeNewSave = function() {
                 $scope.toShowAddTime = false;
                 
                 $scope.jsonAddTime = {
                         idTime: 0,
                         idEmpl: $scope.employeeToAddTime.idEmpl,
                         date: $scope.employeeToAddTime.timeTrackDate,
                         startTime: $scope.employeeToAddTime.startTime,
                         endTime: $scope.employeeToAddTime.endTime
                 };
                 
                 $http({
                     method: 'POST',
                     url: 'jsonhandler',
                     params: {'command': 'addtime'},
                     data: $scope.jsonAddTime
                     
                 }).then(function successCallback(response) {
                     $scope.statusTime = response.status;
                     $scope.dataTime = response.data;
                     this.getAllEmployees();
                 }, function errorCallback(response) {
                     $scope.dataTime = response.data || 'Request failed';
                     $scope.statusTime = response.status;
                     this.getAllEmployees();
                 });
                 
             };
             
             /* ------ Delete tracking time ------ */
             $scope.deleteTime = function(index) {
                 
                 if ($scope.employees[index].idTime != 0 && $scope.employees[index].idTime != null) {
                     $http({
                         method: 'POST',
                         url: 'jsonhandler',
                         params: {'command': 'deltime',
                             'idtime': $scope.employees[index].idTime}
                     }).then(function successCallback(response) {
                         $scope.statusDelete = response.status;
                         $scope.dataDelete = response.data;
                         
                     }, function errorCallback(response) {
                         $scope.dataDelete = response.data || 'Request failed';
                         $scope.statusDelete = response.status;
                     });
                 }
                 
                 this.getAllEmployees();
             };
             


         } ]);