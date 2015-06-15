(function () {
    'use strict';
    var app = angular.module('categories.factory', []);
    var categoryUrl = '/category';

    app.factory('categoryFactory', function ($http) {
        return {
            getAll: function () {
                return $http.post(categoryUrl, []);
            }
        };
    });
}());