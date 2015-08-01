var app = angular.module('Calculator', []);

app.controller('mainController', function($scope){

	$scope.output = '';
	
	
	$scope.buttonClick = function(x)
	{
		$scope.output += x;
	}


	$scope.calculate = function()
	{	
		if ($scope.output == '')
		{
			$scope.output = '';
		}
		else
		{
			var x = $scope.output;
			var result = eval(x);

			$scope.output = result;
		}		
	}


	$scope.clearAll = function()
	{
		$scope.output = '';
	}


	$scope.clearEntry = function()
	{
		var num = $scope.output;
		var numLen = num.length-1;
		var newNum = num.substring(0,numLen);
		$scope.output = newNum;
	}

});