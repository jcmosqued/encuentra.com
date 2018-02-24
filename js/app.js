var app = angular.module('Principal', ['ui.router']);

app.config(function($stateProvider) {
	$stateProvider
	.state("inicio",{
		url:"/",
		views:{
			'categorias': {
				controler: "InicioCtrl",
				templateUrl: "../inicio/vistas/categorias.html"									
			},
			'tarjetas': {
				controler: "InicioCtrl",
				templateUrl: "../inicio/vistas/tarjetas.html"									
			}
		}
	})
})
