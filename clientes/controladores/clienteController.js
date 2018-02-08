app.controller('ClienteCtrl', function($scope, $http, $state, $stateParams, $rootScope){
	
	$scope.clientes="";

	$scope.login = function(){

		$state.go("inicio");
	}
	
})