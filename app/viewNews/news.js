angular.module('myApp.news', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/news', {
            templateUrl: 'viewNews/news.html',
            controller: 'NewsCtrl'
        });
    }])

    .controller('NewsCtrl', ['$scope', '$http', function ($scope, $httpClient) {

    }]);
