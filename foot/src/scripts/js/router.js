var app = angular.module("myapp", ["ui.router"]);
app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");
    $stateProvider
        .state("login", {
            url: "/login",
            templateUrl: "./src/scripts/views/login.html",
            controller: 'loginCtrl'
        })
      .state("home", {
            url: "/home",
            templateUrl: "./src/scripts/views/home.html",
            controller: 'homeCtrl'
        })
        .state("search", {
            url: "/search",
            templateUrl: "./src/scripts/views/search.html"
        })
        .state("comaro", {
            url: "/comaro",
            templateUrl: "./src/scripts/views/comaro.html"
        })
        .state("admin", {
            url: "/admin",
            templateUrl: "./src/scripts/views/admin.html"
        })
        .state("out", {
            url: "/out",
            templateUrl: "./src/scripts/views/out.html"
        })
        .state("follow", {
            url: "/follow",
            templateUrl: "./src/scripts/views/follow.html"
        })
});