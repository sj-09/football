var app = angular.module("myapp", ["ui.router"]);
app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");
    $stateProvider
        .state("login", {
            url: "/login",
            templateUrl: "dir/login.html",
            controller: 'loginCtrl'
        })
        .state("home", {
            url: "/home",
            templateUrl: "dir/home.html",
            controller: 'homeCtrl'
        })
        .state("search", {
            url: "/search",
            templateUrl: "dir/search.html"
        })
        .state("comaro", {
            url: "/comaro",
            templateUrl: "dir/comaro.html"
        })
        .state("admin", {
            url: "/admin",
            templateUrl: "dir/admin.html"
        })
        .state("out", {
            url: "/out",
            templateUrl: "dir/out.html"
        })
        .state("follow", {
            url: "/follow",
            templateUrl: "dir/follow.html"
        })
});