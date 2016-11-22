'use strict';

//service handling connection to backend server
app.factory('NetServiceAddTime', ['$http', function($http) {
    
    var factory = {
        sendNewTime : function(json) {
            return $http({
                method : 'POST',
                url : 'jsonhandler',
                params : {'command' : 'addtime'},
                data : json
            });
        }
    };

    return factory;
    
}]);

// controller to add tracking time
app.controller('AddTimeCtrl', [
        '$scope',
        '$rootScope',
        '$location',
        'NetServiceAddTime',
        function($scope, $rootScope, $location, NetServiceAddTime) {
            
    $scope.employeeToAddTime = $rootScope.employeeToAddTime
    
    this.provideCancel = function() {
        $location.path('/');
    };

    this.provideSave = function() {
        
        $scope.jsonAddTime = {
            idTime: 0,
            idEmpl: $scope.employeeToAddTime.idEmpl,
            date: $scope.employeeToAddTime.timeTrackDate,
            startTime: $scope.employeeToAddTime.startTime,
            endTime: $scope.employeeToAddTime.endTime
        };
        
        this.sendNewTime($scope.jsonAddTime);
       
    };
    
    this.sendNewTime = function(json) {
        NetServiceAddTime.sendNewTime(json).success(function() { 
            $location.path('/'); 
        }).error(function() {
            alert('Error!');
            $location.path('/'); 
        });
    };
    
}]);