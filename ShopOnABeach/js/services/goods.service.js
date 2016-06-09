(function () {
    angular.module("app-shop")
    .service("goodsService", goodsService);

    function goodsService() {
        var service = this;

        service.getCategoriesWithGoods = function () {
            return [
                {
                    categoryId: 1,
                    name: 'Food',
                    goods: [
                        {
                            name: 'Ice cream',
                            info: 'The best one in Kyiv'
                        },
                        {
                            name: 'Watermelon',
                            info: 'Refreshing, tasty, and hydrating'
                        },
                        {
                            name: 'Pluots',
                            info: 'One of the most delicious fruits of summer '
                        },
                        {
                            name: 'Cucumbers',
                            info: 'Has only 16 calories and 4 grams of carb'
                        },
                        {
                            name: 'Swiss Chard',
                            info: 'Provide antioxidant and anti-inflammatory benefits'
                        },
                        {
                            name: 'Tomatoes',
                            info: 'Make a nutritious and delicious addition to any meal'
                        }, {
                            name: 'Blueberries',
                            info: 'A top source of dietary fiber, antioxidants, manganese, and vitamin C'
                        },
                        {
                            name: 'Strawberries',
                            info: 'Universally popular for flavor, color, aroma, and versatility'
                        }
                    ]
                }, {
                    categoryId: 2,
                    name: 'Drinks',
                    goods: [
                        {
                            name: 'Elderflower Fizz',
                            info: 'for boys'
                        },
                        {
                            name: 'Pineapple Rummy',
                            info: 'for girls'
                        },
                        {
                            name: 'Peach-Ginger Iced Tea',
                            info: 'for everyone'
                        },
                        {
                            name: 'Honeydew Ice',
                            info: 'for children'
                        }
                    ]
                }
            ];
        };
    };
})()
