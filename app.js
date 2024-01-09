var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home/home.html',
            controller: 'HomeController'
        })
        .when('/about', {
            templateUrl: 'pages/about/about.html',
            controller: 'AboutController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
