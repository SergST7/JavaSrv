'use strict';

//service handling connection to backend server
app.factory('NetServiceAddTime', ['$http', function($http) {
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

// controller to add tracking time
app.controller('AddTimeCtrl', ['$scope', 'NetServiceAddTime', function($scope, NetServiceAddTime) {
    

}]);