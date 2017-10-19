/**
 * Created by Administrator on 2017/10/18.
 */
var app = angular.module("app", ["ui.router"]);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("buy", {
            url: "/buy",
            templateUrl: "./App/View/buy.html",
            controller: "controller"
        });
    $urlRouterProvider.otherwise("/buy");
});