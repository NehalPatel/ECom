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

app.controller("laptopController", function ($scope, $http) {
    $http.get("items.json").then(function (response) {
        $scope.products = response.items.laptops;
    });
});
