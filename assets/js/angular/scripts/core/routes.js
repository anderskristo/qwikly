(function () {
    var app = angular.module('qwikly');

    app.config(function ($stateProvider) {
        $stateProvider
            .state('guest', {
                url: "/",
                views: {
                    "FullContentView": {
                        templateUrl: 'core/landings/guest.html'
                    },
                    "MainContentView@guest": {
                        templateUrl: 'core/partials/sign-in-form.html'
                    },
                },
                onEnter: function (CoreService) {
                    CoreService.redirectIfAuthorized();
                }
            })
            .state('guest.sign-up', {
                url: "sign-up/",
                views: {
                    "MainContentView@guest": {
                        templateUrl: 'core/partials/sign-up-form.html'
                    }
                }
            })
            .state('authenticated', {
                url: '/account/',
                views: {
                    'FullContentView': {
                        templateUrl: 'core/landings/authenticated.html'
                    },
                    "MainContentView@authenticated": {
                        templateUrl: 'qwikly/landing.html'
                    }
                },
                onEnter: function (CoreService) {
                    CoreService.redirectIfUnauthorized();
                }
            })
    });
})();