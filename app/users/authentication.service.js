(function () {
    'use strict';

    angular.module('issueTrackingSystem.users')
        .factory('authentication', authentication);

    authentication.$inject = ['$http', '$q', 'BASE_URL'];

    function authentication($http, $q, BASE_URL) {
        var service = {};

        return service;
    }

} ());