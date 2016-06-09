(function () {
    angular.module('app-shop')
    .controller('rootController', rootController);

    rootController.$inject = ['$rootScope'];

    function rootController($scope) {
        var vm = this;

        $scope.searchField = "";
    }
})()