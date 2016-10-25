var app=angular.module("myApp",[]);
		
			app.controller("mainCtrl",function($scope, $http )
			{
			  $http.get("http://localhost:8888")
				.then(function(response){
				$scope.books = response.data.books;
				console.log("weafgaed", $scope.books);
				});
			});