'use strict';

//service handling connection to backend server
app.factory('NetServiceAddEmpl', ['$http', function($http) {
    return {
        getEmployees: function() {
            return $http({
                method: 'GET', // TODO
                url: 'jsonhandler', // TODO
                params: {'command' : 'allemployeesfull'} // TODO
            });
        }
    };
}]);

// controller to add new employee
app.controller('AddEmplCtrl', [
        '$scope',
        '$location',
        'NetServiceAddEmpl',
    function($scope, $location, NetServiceAddEmpl) {
        
        $scope.employeeToAdd = '';
        
        this.provideCancel = function() {
            $location.path('/');
        };
        
        this.provideSave = function() {
            alert("to be developed");
            $location.path('/');
            
        };

}]);