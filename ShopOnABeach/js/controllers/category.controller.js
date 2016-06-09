(function () {
	angular.module('app-shop')
    .controller('categoryController', categoryController);

	categoryController.$inject = ['goodsService'];

	function categoryController(goodsService) {
		var vm = this;

		vm.allCategories = goodsService.getCategoriesWithGoods();
	}
})()