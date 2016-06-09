(function () {
	angular.module('app-shop')
    .controller('homeController', homeController);

	homeController.$inject = ['$scope'];

	function homeController($scope) {
		var vm = this;

		vm.message = "Welcome!";
		$scope.rootCtrl.searchField = "";
	}
})()