(function () {
    angular.module('app-shop')
    .controller('goodsController', goodsController);

    goodsController.$inject = ['$stateParams', 'goodsService', 'basketService'];
               
    function goodsController($stateParams, goodsService, basketService) {
	    var vm = this;

	    var allCategories = goodsService.getCategoriesWithGoods();

	    vm.goods = _.findWhere(allCategories, { categoryId: +$stateParams.id }).goods;

	    vm.addToBasket = function (good) {
	        basketService.addToBasket(good);
	        good.added = true;
	    };


	}
})()