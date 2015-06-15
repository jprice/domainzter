(function () {
    'use strict';
    var app = angular.module('pdp.config', ['angular-loading-bar']);

    // Avoid clashing with Blade templating
    app.config(function ($interpolateProvider) {
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
    });

    // Remove spinner from angular-loading-bar
    app.config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
    }]);
}());