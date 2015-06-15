(function () {
    'use strict';
    var app = angular.module('domains.controller', []);

    app.controller('DomainController', function (domainFactory, categoryFactory) {
        var vm = this;

        vm.domains = [];
        vm.categories = [];

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

        /**
         * Init function for controller
         */
        function activate() {
            // Get all domains
            domainFactory.getAll()
                .then(function (response) {
                    vm.domains = response.data;
                    return vm.domains;
                })
                // Set status for each domain
                .then(function (domains) {
                    angular.forEach(domains, function (domain) {
                        domainFactory.getDomainStatus(domain.url)
                            .then(function (response) {
                                domain.active = response.data;
                            });
                    });
                });

            // Get all categories
            categoryFactory.getAll()
                .then(function (response) {
                    vm.categories = response.data;
                });
        }

        activate();
    });
}());