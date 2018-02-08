app.config(function($stateProvider) {
	$stateProvider
	.state("inicio.clientes",{
		url:"/clientes",
		controler: "ClienteCtrl",
		templateUrl: "clientes/vistas/clientes.html"
	})
})
