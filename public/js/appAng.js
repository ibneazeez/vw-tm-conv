'use strict';

var app = angular.module('myApp', ['ngAnimate']);

app.controller('viewController', ['$scope', function ($scope) {
	$scope.viewchat="false";
	
	$scope.chatfunction=function(){
		if($scope.viewchat=="false"){
			$scope.viewchat = "true";
			document.getElementById("VidageVideo").pause();
		}
		else{
			$scope.viewchat = "false";
			document.getElementById("VidageVideo").play();
		}
	};
}]);