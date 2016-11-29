'use strict';

//service handling connection to backend server
app.factory('NetService', ['$http', function($http) {
    return {
        getEmployees: function() {
            return $http({
                method: 'GET',
                url: 'jsonhandler',
                params: {'command' : 'allemployeesfull'}
            });
        }
    };
}]);

// controller to output initial information
app.controller('MainCtrl', ['$scope', '$rootScope', '$location', 'NetService', function($scope, $rootScope, $location, NetService) {
    
    $scope.getAllEmployees = function() {        
        NetService.getEmployees().then(function(response) {
            $scope.employees = response.data;
        });
    };
    
    this.editEmployee = function(index) {
        $rootScope.employeeToEdit = $scope.employees[index];
        $location.path('/editempl');
    };
    
    this.addNewEmployee = function() {
        $location.path('/addempl');
    };
    
    this.addNewTime = function(index) {
        $rootScope.employeeToAddTime = $scope.employees[index];
        $location.path('/addtime');
    };
    
    this.deleteTime = function(index) {
        $rootScope.employeeToDelTime = $scope.employees[index];
        $location.path('/deltime');
    };
    
}]);