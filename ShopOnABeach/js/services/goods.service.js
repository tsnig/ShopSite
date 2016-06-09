(function () {
    angular.module("app-shop")
    .service("goodsService", goodsService);

    function goodsService() {
        var service = this;

        service.getCategoriesWithGoods = function () {
            return [
                {
                    categoryId: 1,
                    name: 'Phones',
                    goods: [
                        {
                            name: 'Nokia',
                            info: 'the best phone'
                        },
                        {
                            name: 'Sony',
                            info: 'my first phone'
                        }, {
                            name: 'IPhone',
                            info: 'the best phone'
                        },
                        {
                            name: 'Xiaomi',
                            info: 'my first phone'
                        },
                        {
                            name: 'Lenovo',
                            info: 'the best phone'
                        },
                        {
                            name: 'Samsung',
                            info: 'my first phone'
                        }, {
                            name: 'Meizu',
                            info: 'the best phone'
                        },
                        {
                            name: 'Asus',
                            info: 'my first phone'
                        }
                    ]
                }, {

                    categoryId: 2,
                    name: 'Games',
                    goods: [
                        {
                            name: 'Skyrime',
                            info: 'for boys'
                        },
                        {
                            name: 'Angry Birds',
                            info: 'for children'
                        }
                    ]
                }
            ];
        };
    };
})()
