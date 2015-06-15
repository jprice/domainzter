(function () {
    'use strict';
    angular.module('app', [
        // PAGE SPECIFIC
        'domain.controller',

        'domains.controller',
        'domains.factory',
        'domains.directive',

        'categories.factory',

        // GENERAL
        'pdp.config',
        'detector.appDetector',

        // 3RD PARTY
        'angular-loading-bar',
        'toastr'
    ]);
}());