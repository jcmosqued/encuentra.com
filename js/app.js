var app = angular.module('Principal', ['ui.router']);

app.config(function($stateProvider) {
	$stateProvider
	.state("inicio",{
		url:"/",
		views:{
			'principal': {
				controler: "InicioCtrl",
				templateUrl: "../html/principal.html"									
			},
			'principal.categorias': {
				controler: "InicioCtrl",
				templateUrl: "../inicio/vistas/categorias.html"									
			},
			'principal.tarjetas': {
				controler: "InicioCtrl",
				templateUrl: "../inicio/vistas/tarjetas.html"									
			}
		}
	})

})
