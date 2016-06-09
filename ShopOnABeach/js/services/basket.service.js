(function () {
    angular.module('app-shop')
    .service('basketService', basketService);

    function basketService() {
        var service = this;
        service.items = [];

        service.addToBasket = function (product) {
            var existingItem =_.findWhere(service.items, { name: product.name });
            if (!existingItem) {
                var item = _.clone(product)
                item.count = 1;
                service.items.push(item);
            }
            else {
                existingItem.count++;
            }
        };

        service.removeUnitFromBasket = function (product) {
            var existingItem = _.findWhere(service.items, { name: product.name });

            if (!existingItem) return;

           if (existingItem.count > 0) {
                existingItem.count--;
            }
        };

        service.removeFromBasket = function (product) {
            var existingItem = _.findWhere(service.items, { name: product.name });

            if (existingItem) 
                service.items = _.without(service.items, existingItem);
        };

        service.getGoodsfromBasket = function () {
            return service.items;
        }
    }
})()