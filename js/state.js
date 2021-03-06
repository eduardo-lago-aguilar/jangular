'use strict';

var config = function ($stateProvider) {
    $stateProvider.state('stateA', {});

    $stateProvider.state('stateB', {
        abstract: true
    });

    $stateProvider.state('stateC', {
        url: '/some_url',
        controller: 'SomeUserController',
        controllerAs: 'suc'
    });

    $stateProvider.state('stateD', {
        template: '<div id="some_template"></div>'
    });

    $stateProvider.state('stateE', {
        templateUrl: '/templates/footer.html',
        views: {
            nested_view: {
                templateUrl: '/templates/views/nested.html'
            }
        }

    });

    var resolveUserProfile = function (sampleHttpService) {
        return sampleHttpService.doGet();
    };

    $stateProvider.state('stateF', {
        resolve: {
            userProfile: ['sampleHttpService', resolveUserProfile]
        }
    });

    var resolveUserHistory = function (sampleHttpService) {
        return sampleHttpService.doGetWith(1, 'a', true);
    };

    $stateProvider.state('stateG', {
        resolve: {
            userHistory: ['sampleHttpService', resolveUserHistory]
        }
    });
};

angular.module('sample.js.module').config(config);
