var app = angular.module("myApp", [])
	.controller('mainController', ['$scope', function($scope){
		$scope.title = 'Employees';
		$scope.employees = [
		{
			name: "name 1",
			age: 34,
			description: "description"
		},
		{
			name: "name 2",
			age: 75,
			description: "description2"
		}
		];
	}]);