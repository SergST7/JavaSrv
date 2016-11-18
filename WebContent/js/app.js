var app = angular.module('myApp', [])
.controller('MainController', ['$scope', '$http', function($scope, $http) {
	
	$scope.getAllEmployees = function() {
		$http({
			method: 'GET',
			url: 'jsonhandler',
			params: {'command': 'allemployeesfull'}
		}).then(function successCallback(response) {
			$scope.status = response.status;
			$scope.data = response.data;
			$scope.employees = response.data;
		}, function errorCallback(response) {
			$scope.data = response.data || 'Request failed';
			$scope.status = response.status;
		});
	};
	
	$scope.editEmployee = function(id, idTime) {
		$scope.toShow = true;
		for (var i = 0; i < $scope.employees.length; i++) {
			if ($scope.employees[i].idEmpl === id && $scope.employees[i].idTime === idTime) {
				$scope.employeeToEdit = $scope.employees[i];
			}
		}
	};
	
	$scope.employeeSave = function() {
		$scope.toShow = false;
		alert("to be developed");
	};
	
	$scope.employeeDelete = function() {
		$scope.toShow = false;
		alert("to be developed");
	};
	
	$scope.addNewEmployee = function() {
		alert("to be developed");
	};
	
	$scope.toShow = false;
	
}]);