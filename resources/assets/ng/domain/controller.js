(function () {
    'use strict';
    var app = angular.module('domain.controller', []);

    app.controller('SingleDomainController', function (domainFactory, categoryFactory, appDetector, $timeout, $rootScope, $sce, toastr) {
        var vm = this;
        var scope = $rootScope;

        // domainid will be set by ng-init in domain template
        vm.domainId = 0;
        vm.domainInfo = {};
        vm.domainRequest = {};
        vm.categories = [];

        vm.appsFound = [];
        vm.appsFoundServer = [];

        vm.editableNotes = false;
        var oldNotes;

        vm.editableExpiration = false;
        vm.newExpiration = '';

        /**
         * Get category name by id
         * @param id
         * @returns string
         */
        vm.getCategoryName = function (id) {
            for (var i = 0; i < vm.categories.length; i++) {
                if (vm.categories[i].id == id) {
                    return vm.categories[i].name;
                }
            }
        };

        vm.submitNotes = function () {
            // If nothing has changed, notes will be an object (from sce parsing)
            // which means nothing should be done (no need to save anything)
            if (typeof vm.domainInfo.notes != 'string') {
                vm.editableNotes = false;
                return;
            }

            domainFactory.editNotes(vm.domainId, vm.domainInfo.notes)
                .then(function (response) {
                    vm.domainInfo.notes = $sce.trustAsHtml(vm.domainInfo.notes);
                    vm.editableNotes = false;
                    toastr.success(response.data.success);
                });
        };

        vm.submitExpiration = function () {
            if (vm.newExpiration == '' || vm.newExpiration == undefined) {
                toastr.error('Expiration date seems to be empty. No changes has been made.');
                return;
            }

            domainFactory.editExpiration(vm.domainId, vm.newExpiration)
                .then(function (response) {
                    vm.domainInfo.expiration = response.data.expiration;
                    vm.editableExpiration = false;
                    toastr.success(response.data.success);
                });
        };

        vm.cancelEditExpiration = function () {
            vm.editableExpiration = false;
        };

        vm.editNotes = function () {
            oldNotes = angular.copy(vm.domainInfo.notes);
            vm.editableNotes = true;
        };

        vm.cancelEditNotes = function () {
            vm.domainInfo.notes = oldNotes;
            vm.editableNotes = false;
        };

        /**
         * Get apps from header
         */
        function getAppsFromHeader() {
            vm.appsFoundServer = appDetector.getAppsFromHeaders(vm.domainRequest.headers);
        }

        /**
         * Get apps from body (html)
         */
        function getAppsFromBody() {
            vm.appsFound = appDetector.getAppsFromBody(vm.domainRequest.body);
        }

        /**
         * Init function for controller
         */
        function activate() {
            // Get domain info
            $timeout(function () {
                domainFactory.getDomainInfo(vm.domainId)
                    .then(function (response) {
                        vm.domainInfo = response.data.domainInfo;
                        vm.domainInfo.notes = $sce.trustAsHtml(vm.domainInfo.notes);
                        vm.domainRequest = response.data.domainRequest;

                        // If request was fetched and status code was OK,
                        // tell watcher to initiate fetching apps from headers, body etc
                        if (response.data.domainRequest.statuscode == 200) {
                            scope.requestFetched = true;
                        }
                    });
            });

            // Get all categories
            categoryFactory.getAll()
                .then(function (response) {
                    vm.categories = response.data;
                });
        }

        activate();

        /**
         * Add watcher for when domain request is fetched.
         * It can vary because of cache, so a watch is needed.
         */
        scope.$watch('requestFetched', function () {
            if (scope.requestFetched) {
                getAppsFromHeader();
                getAppsFromBody();
            }
        });
    });
}());