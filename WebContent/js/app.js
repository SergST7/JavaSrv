var app = angular.module('myApp', []).controller(
        'MainController', ['$scope', '$http', function($scope, $http) {

             $scope.getAllEmployees = function() {
                 $http({
                     method : 'GET',
                     url : 'jsonhandler',
                     params : {
                         'command' : 'allemployeesfull'
                     }
                 }).then(function successCallback(response) {
                     $scope.status = response.status;
                     $scope.data = response.data;
                     $scope.employees = response.data;
                 }, function errorCallback(response) {
                     $scope.data = response.data || 'Request failed';
                     $scope.status = response.status;
                 });
             };
             
             /* ------ Edit employee  ------ */
             $scope.toShowEdit = false;
             $scope.editEmployee = function(id, idTime) {
                 for (var i = 0; i < $scope.employees.length; i++) {
                     if ($scope.employees[i].idEmpl === id
                             && $scope.employees[i].idTime === idTime) {
                         $scope.employeeToEdit = $scope.employees[i];
                     }
                 }

                 $scope.deparName = $scope.employeeToEdit.depName;
                 if ($scope.toShowAdd == true) {
                     $scope.toShowAdd = false;
                 }
                 if ($scope.toShowAddTime == true) {
                     $scope.toShowAddTime = false;
                 }
                 $scope.toShowEdit = true;

             };

             $scope.employeeCancel = function() {
                 $scope.toShowEdit = false;
                 this.getAllEmployees();
             };

             $scope.employeeSave = function() {
                 $scope.toShowEdit = false;
                 alert("to be developed");
                 /*
                  * send request for update employee to server or if
                  * tracking time are changed only send request for
                  * update time table
                  */
             };

             $scope.employeeDelete = function() {
                 $scope.toShowEdit = false;
                 alert("to be developed");
                 /* send request for delete time to server */
             };
             
             // Enable dropdown menu for department TODO
             $scope.deps = [ 'Administration', 'Development',
                             'Recruiter' ]; // to get from server
             $scope.deparName = '';
             
             /* ------ Add new employee ------ */
             $scope.toShowAdd = false;
             $scope.addNewEmployee = function() {

                 if ($scope.toShowEdit == true) {
                     $scope.toShowEdit = false;
                 }
                 if ($scope.toShowAddTime == true) {
                     $scope.toShowAddTime = false;
                 }
                 $scope.toShowAdd = true;
                 $scope.employeeToAdd = '';
             };

             $scope.employeeNewCancel = function() {
                 $scope.toShowAdd = false;
                 this.getAllEmployees();
             };

             $scope.employeeNewSave = function() {
                 $scope.toShowAdd = false;
                 alert("to be developed");
                 /* send request for add new employee to server or */
             };
             
             /* ------ Add new tracking time ------ */
             $scope.toShowAddTime = false;
             $scope.addNewTime = function(id) {
                 for (var i = 0; i < $scope.employees.length; i++) {
                     if ($scope.employees[i].idEmpl === id) {
                         $scope.employeeToAddTime = $scope.employees[i];
                     }
                 }

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
                 alert("to be developed");
                 /* send request for add new employee to server or */
             };
             
             /* ------ Delete tracking time ------ */
             $scope.deleteTime = function(id, idTime) {
                 for (var i = 0; i < $scope.employees.length; i++) {
                     if ($scope.employees[i].idEmpl === id
                             && $scope.employees[i].idTime === idTime) {
                         // check if time tracking rows are available
                         if ($scope.employees[i].idTime != 0 && $scope.employees[i].idTime != null) {
                             console.log($scope.employees[i].idTime);
                             $scope.employees.splice(i, 1);
                             // TODO remove time on server
                         }
                         
                         break;
                         
                         
                     }
                 }
                 
                 //this.getAllEmployees(); // after delete on server implementation

                 

             };
             


         } ]);