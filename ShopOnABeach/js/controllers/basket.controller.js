(function () {
	angular.module('app-shop')
    .controller('basketController', basketController);

	basketController.$inject = ['basketService','$scope'];

	function basketController(basketService, $scope) {
	    var vm = this;

	    $scope.rootCtrl.searchField = "";
        
		vm.goods = function () {
		    return basketService.getGoodsfromBasket();
		}

		vm.decreaseCount = function (product) {
		    basketService.removeUnitFromBasket(product);
		};

		vm.increaseCount = function (product) {
		    basketService.addToBasket(product);
		};

		vm.remove = function (product) {
		    basketService.removeFromBasket(product);
		}

		vm.basketEmpty = function () {
		    return vm.goods().length == 0;
		}
	}
})()