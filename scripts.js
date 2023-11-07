var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "home.html",
            controller: "homeCtrl"
        })
        .when("/about", {
            templateUrl: "about.html",
        })
        .when("/contact", {
            templateUrl: "contact-us.html"
        })
        .when("/shop", {
            templateUrl: "shop.html"
        });
});

app.controller("shopController", function ($scope, $http) {
    $http.get("items.json").then(function (response) {
        $scope.laptops = response.data.items.laptops;
        $scope.mobiles = response.data.items.mobiles;
        $scope.tablets = response.data.items.tablets;
    });
});
