(function () {
    'use strict';
    var app = angular.module('domains.factory', []);
    var domainUrl = '/domain';

    app.factory('domainFactory', function ($http) {
        return {
            getAll: function () {
                return $http.post(domainUrl, []);
            },

            getDomainStatus: function (url) {
                return $http.post(domainUrl + '/getStatus', [url]);
            },

            getDomainInfo: function (id) {
                return $http.post(domainUrl + '/getInfo', [id]);
            },

            editNotes: function (id, notes) {
                return $http.post(domainUrl + '/editNotes', [id, notes]);
            },

            editExpiration: function (id, date) {
                return $http.post(domainUrl + '/editExpiration', [id, date]);
            }
        };
    });
}());