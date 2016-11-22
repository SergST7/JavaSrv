'use strict';

//service handling connection to backend server
app.factory('NetServiceDelTime', ['$http', function($http) {
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
app.controller('DelTimeCtrl', ['$scope', 'NetServiceDelTime', function($scope, NetServiceDelTime) {
    

}]);