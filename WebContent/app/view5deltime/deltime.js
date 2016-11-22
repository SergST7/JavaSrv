'use strict';

//service handling connection to backend server
app.factory('NetServiceDelTime', ['$http', function($http) {
    var factory = {
            delTime : function(id) {
            return $http({
                method : 'POST',
                url : 'jsonhandler',
                params: {'command': 'deltime', 'idtime': id}
            });
        }
    };

    return factory;
}]);

// controller to add tracking time
app.controller('DelTimeCtrl', [
        '$scope',
        '$rootScope',
        '$location',
        'NetServiceDelTime', function($scope, $rootScope, $location, NetServiceDelTime) {
    
    
    this.provideCancel = function() {
        $location.path('/');
    };

    this.provideYes = function() {
        
        if ($scope.employeeToDelTime.idTime != 0 && $scope.employeeToDelTime.idTime != null) {
            NetServiceDelTime.delTime($scope.employeeToDelTime.idTime)
            .success(function() { 
                $location.path('/');
            })
            .error(function() {
                alert('Error!');
                $location.path('/'); 
            });
            
            $location.path('/');
            
        } else {
            alert('Time is not available and cannot be deleted');
            $location.path('/');
        }
        
        
    };

}]);