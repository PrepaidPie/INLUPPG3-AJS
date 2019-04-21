var app = angular
    .module('module', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider.when("/", {
            templateUrl : "sort-view/brick.html"
        })
        .when("/list-view", {
            templateUrl: "sort-view/list.html"
        })
    })

   .controller('controller', function($scope) {
        $scope.products = products;

        $scope.sortColumn = "productname";
        $scope.itemsTotal = $scope.products.length;
        $scope.options = [{value: 5, name: "5"},{value: 10, name: "10"},{value: 20, name: "20"},{value: 50, name: "50"},{value: 100, name: "100"}];

        $scope.brickActive = true; 
    })