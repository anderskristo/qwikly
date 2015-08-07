(function () {
    var app = angular.module('qwikly');

    app.config(function ($stateProvider, qwiklyProvider) {
        $stateProvider
            .state('authenticated.projects', {
                url: 'projects/',
                views: {
                    "MainContentView@authenticated": {
                        templateUrl: 'qwikly/generics/list.html'
                    }
                }
            })
            .state('authenticated.projects2', {
                url: 'projects2/',
                views: {
                    "MainContentView@authenticated": {
                        templateUrl: 'qwikly/generics/list.html'
                    }
                }
            })
    });
})();