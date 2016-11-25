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
        console.log($scope.employeeToEdit);
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
        
        // TODO
        $location.path('/');
        alert("to be developed");
        /* send request for delete time to server */
    };
    
    
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