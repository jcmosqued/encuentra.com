app.config(function($stateProvider) {
	$stateProvider
	.state("login",{
		url:"/login",
		views:{
			'principal': {
				controler: "UserCtrl",
				templateUrl: "../usuarios/vistas/login.html"
			}
		}
	})
	.state("addusuario",{
		url:"/addusuario",
		views:{
			'principal': {
				controler: "UserCtrl",
				templateUrl: "../usuarios/vistas/usuarios.html"
			}
		}
	})

})
 