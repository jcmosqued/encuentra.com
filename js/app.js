var app = angular.module('Principal', ['ui.router']);

app.config(function($stateProvider) {
	$stateProvider
	.state("inicio",{
		url:"/",
		controler: "UserCtrl",
		templateUrl: "usuarios/vistas/inicio.html"						
	})
})
