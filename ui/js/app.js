var app = angular.module("app",[]);

app.controller("getNews", function ($scope, $http) {
    $http.get("http://bmgt.ua/articles/")
        .then(function(response){
            $scope.newsArray = response.data;
        });
});