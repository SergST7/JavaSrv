'use strict';

//service handling connection to backend server
app.factory('NetServiceAddEmpl', ['$http', function($http) {
    
    var factory = {
        getDeps: function() {
            return $http({
                method: 'GET',
                url: 'jsonhandler',
                params: {'command' : 'getdeps'}
            });
        },
        sendNewEmpl : function(json) {
            return $http({
                method : 'POST',
                url : 'jsonhandler',
                params : {'command' : 'addempl'},
                data : json
            });
        }
    };
    
    return factory;
}]);

// controller to add new employee
app.controller('AddEmplCtrl', [
        '$scope',
        '$location',
        'NetServiceAddEmpl',
    function($scope, $location, NetServiceAddEmpl) {
        
        $scope.employeeToAdd = '';
        var deps = '';
        var gotDeps = false;
        
        this.getDeps = function() {
            deps = NetServiceAddEmpl.getDeps()
            .success(function(res) { 
                deps = res;
                gotDeps = true;
                setDepFields();
            })
            .error(function() {
                alert('Error!');
                $location.path('/'); 
            });
        }
        
        var setDepFields = function() {
            
            for (var i = 0; i < deps.length; i++) {
                if (deps[i].name == $scope.employeeToAdd.depName) {
                    $scope.employeeToAdd.idDep = deps[i].idDep;
                    $scope.employeeToAdd.depDescr = deps[i].description;
                }
            }
        }
        
        this.provideSave = function() {
            
            if (!gotDeps) {
                setDepFields();
            }
            
            var jsonAddEmpl = {
                idEmpl: 0,
                idDep: $scope.employeeToAdd.idDep,
                lastName: $scope.employeeToAdd.lastName,
                firstName: $scope.employeeToAdd.firstName,
                middleName: $scope.employeeToAdd.middleName,
                position: $scope.employeeToAdd.position,
                sex: $scope.employeeToAdd.sex,
                contactInfo: $scope.employeeToAdd.contactInfo,
                createdDate: $scope.employeeToAdd.createdDate
            };
            
            NetServiceAddEmpl.sendNewEmpl(jsonAddEmpl).success(function() { 
                alert('New Employee added');
                $location.path('/');
            }).error(function() {
                alert('Error!');
                $location.path('/'); 
            });
            
        };
        
        this.provideCancel = function() {
            $location.path('/');
        };

}]);