app.controller('UserCtrl', function($scope, $http, $state, $stateParams, $rootScope){
	
	$scope.usuarios="";

	$scope.login = function(){

		$state.go("inicio");
	}
	
})