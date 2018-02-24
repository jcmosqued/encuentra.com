app.controller('InicioCtrl', function ($scope, $http, $state){

	$scope.redireccionar =function(){
		$state.go("inicio");
	}

})