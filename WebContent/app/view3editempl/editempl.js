'use strict';

//service handling connection to backend server
app.factory('NetServiceEditEmpl', ['$http', function($http) {
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

// controller to edit employee data
app.controller('EditEmplCtrl', [
        '$scope',
        '$rootScope',
        '$location',
        'NetServiceEditEmpl',
        function($scope, $rootScope, $location, NetServiceEditEmpl) {
            
    $scope.employeeToEdit = $rootScope.employeeToEdit;
    
    this.provideCancel = function() {
        $location.path('/');
    };

    this.provideSave = function() {
        alert("to be developed");
        $location.path('/');
        /*
         * send request for update employee to server or if
         * tracking time are changed only send request for
         * update time table
         */
    };

    this.provideDelete = function() {
        $location.path('/');
        alert("to be developed");
        /* send request for delete time to server */
    };

}]);