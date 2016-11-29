'use strict';

//service handling connection to backend server
app.factory('NetServiceEditEmpl', ['$http', function($http) {
    return {
        sendEditEmployee: function(json) {
            return $http({
                method: 'POST',
                url: 'jsonhandler',
                params: {'command' : 'editempl'},
                data : json
            });
        },
        sendEditTime: function(json) {
            return $http({
                method: 'POST',
                url: 'jsonhandler',
                params: {'command' : 'edittime'},
                data : json
            });
        },
        sendDeleteAllTimes: function(idEmpl) {
            return $http({
                method: 'POST',
                url: 'jsonhandler',
                params: {'command' : 'delalltimes', 'idempl' : idEmpl}
            });
        },
        sendDelEmpl: function(idEmpl) {
            return $http({
                method: 'POST',
                url: 'jsonhandler',
                params: {'command' : 'delempl', 'idempl' : idEmpl}
            });
        },
        sendDelDepHead: function(idEmpl) {
            return $http({
                method: 'POST',
                url: 'jsonhandler',
                params: {'command' : 'deldephead', 'idempl' : idEmpl}
            });
        }
        
    };
}]);

// controller to edit employee data
app.controller('EditEmplCtrl', [
        '$scope',
        '$rootScope',
        '$location',
        'NetServiceEditEmpl',
        function($scope, $rootScope, $location, NetServiceEditEmpl) {
            
    $scope.employeeToEdit = $rootScope.employeeToEdit;
    
    // store data in new variable to watch future changes
    $scope.emplInit = angular.copy($scope.employeeToEdit);
    
    
    
    this.provideCancel = function() {
        $location.path('/');
    };
    
    // handles pressed Save button
    this.provideSave = function() {
        // check if employee data has changes
        if (!($scope.employeeToEdit.lastName == $scope.emplInit.lastName 
                && $scope.employeeToEdit.firstName == $scope.emplInit.firstName 
                && $scope.employeeToEdit.middleName == $scope.emplInit.middleName 
                && $scope.employeeToEdit.position == $scope.emplInit.position
                && $scope.employeeToEdit.sex == $scope.emplInit.sex
                && $scope.employeeToEdit.contactInfo == $scope.emplInit.contactInfo
                && $scope.employeeToEdit.createdDate == $scope.emplInit.createdDate
                && $scope.employeeToEdit.depName == $scope.emplInit.depName)) {
            
            sendEditEmpl();
        // check if time data has changes
        } else if (!($scope.employeeToEdit.timeTrackDate == $scope.emplInit.timeTrackDate 
                && $scope.employeeToEdit.startTime == $scope.emplInit.startTime 
                && $scope.employeeToEdit.endTime == $scope.emplInit.endTime)
                && !($scope.employeeToEdit.idTime == null
                        || $scope.employeeToEdit.idTime == 0)){
            
            sendEditTime();
            
        } else {
            alert("Nothing changed!");
        }
        
        $location.path('/');
       
    };
    
    // handles pressed Delete button
    this.provideDelete = function() {
        
        // gets confirmation from user to delete
        var yesToDelete = confirm("Are you sure?");
        
        if (yesToDelete == true) {
            
            // sends request to delete dep head if employee is one
            NetServiceEditEmpl.sendDelDepHead($scope.employeeToEdit.idEmpl).success(function() {
                
                // deletes all time tracking for employee
                sendDeleteAllTimes($scope.employeeToEdit.idEmpl);
                
            }).error(function () {
                alert('Request to server failed! Try again later.');
                $location.path('/editempl');
            });
            
            
            
        } else {
            $location.path('/editempl');
        }
    }
    
    
    // sends request to clean all times for employee to be deleted
    var sendDeleteAllTimes = function(idEmpl) {
        NetServiceEditEmpl.sendDeleteAllTimes(idEmpl).success(function() { 
            
            sendDeleteEmployee(idEmpl);
            
        }).error(function() {
            alert('Employee has not been deleted!');
            $location.path('/'); 
        });
    }
    
    // sends request to delete employee
    var sendDeleteEmployee = function(idEmpl) {
        NetServiceEditEmpl.sendDelEmpl(idEmpl).success(function() { 
            alert('Employee has been deleted!');
            $location.path('/');
        }).error(function() {
            alert('Employee has not been deleted!');
            $location.path('/'); 
        });
    }
    
    
    // creates json of edited employee and sends to server
    var sendEditEmpl = function () {
        var jsonEditEmpl = {
                idEmpl: $scope.employeeToEdit.idEmpl,
                idDep: $scope.employeeToEdit.idDep,
                lastName: $scope.employeeToEdit.lastName,
                firstName: $scope.employeeToEdit.firstName,
                middleName: $scope.employeeToEdit.middleName,
                position: $scope.employeeToEdit.position,
                sex: $scope.employeeToEdit.sex,
                contactInfo: $scope.employeeToEdit.contactInfo,
                createdDate: $scope.employeeToEdit.createdDate
            };
        
        NetServiceEditEmpl.sendEditEmployee(jsonEditEmpl).success(function() { 
            alert("Employee data updated!");
            $location.path('/');
        }).error(function() {
            alert('Error!');
            $location.path('/'); 
        });
    }
    
    var sendEditTime = function () {
        var jsonEditTime = {
                idTime: $scope.employeeToEdit.idTime,
                idEmpl: $scope.employeeToEdit.idImpl,
                date: $scope.employeeToEdit.timeTrackDate,
                startTime: $scope.employeeToEdit.startTime,
                endTime: $scope.employeeToEdit.endTime
            };
        NetServiceEditEmpl.sendEditTime(jsonEditTime).success(function() { 
            alert("Time updated!");
            $location.path('/');
        }).error(function() {
            alert('Error!');
            $location.path('/'); 
        });
    }
    

}]);