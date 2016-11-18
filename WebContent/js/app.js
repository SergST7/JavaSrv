var app = angular.module('myApp', [])
	.controller('mainController', ['$scope', '$http', function($scope, $http) {
		
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
		
	}]);