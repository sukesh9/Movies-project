var app = angular.module('myApp', []);

app.controller('movieCtrl', function($scope, $http){
	$scope.year='';
	$scope.film='';

	$scope.myFunc= function(){

			$http.get('http://www.omdbapi.com/?t='+$scope.film+'&y='+$scope.year+'&plot=short&r=json')
			.then(function(response){
				$scope.myMovie = response.data;
				console.log(response);

			});
	};

});		