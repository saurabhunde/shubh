var app=angular.module("myApp",["ngRoute"]);
			app.config(function($routeProvider) {
			$routeProvider
			.when("/",{
				//templateUrl:"default.html"
				template: "howa re u"
			})
			.when("/addStudent",{
				templateUrl:"add.html",
				controller:"addCtrl"
				
			})
			.when("/addAuthor",{
				templateUrl:"view.html",
				controller:"viewCtrl"
			});
});

app.run(function($rootScope){
		
 });