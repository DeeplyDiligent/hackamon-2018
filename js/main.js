/**
 * Main AngularJS Web Application
 */
var app = angular.module('myAngularApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider','$locationProvider', function ($routeProvider,$locationProvider) {
  $routeProvider    
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/blog", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/news", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
    
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
}]);


/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function ($scope, $location, $http) {
    console.log("Page Controller reporting for duty.");
    $('html, body').animate({scrollTop:0}, 600);
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
        console.log(viewLocation);
    };
});

app.controller('HeaderController', function ($scope, $location, $http) {
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
        console.log(viewLocation);
    };
});
