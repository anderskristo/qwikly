(function () {
    var app = angular.module('qwikly');

    app.run(function ($rootScope) {
        /**
         *  Add backend config to rootscope
         * **/
        $rootScope.backendConfig = window.CONFIG;
    });

    app.run(function ($state, $rootScope, CoreService) {
        /**
         * If the user is authenticated we set the currentUser
         *  **/
        if (CoreService.isAuthenticated()) {
            CoreService.setCurrentUser();
        }
    });

    app.run(function ($rootScope, $state, $stateParams) {

        /**
         *  Set $state and $stateParams to $rootScope in order to get access
         *  to the variables in our angular templates
         * **/

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    });

    app.run(function (CoreService, $interval, $rootScope) {

        /**
         * Get the MeProfile every 90 seconds if the user is authenticated
         * CoreService.getMeProfile will sign out the user if the request is BAD
         * and the interval will get canceled.
         * **/

        var intervalPromise = null;

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            var $state = event.targetScope.$state;
            var isAuthenticated = CoreService.isAuthenticated();
            var stateIsAuthenticated = $state.includes('authenticated');

            if (!stateIsAuthenticated && !isAuthenticated && intervalPromise) {
                $interval.cancel(intervalPromise);
                intervalPromise = null;
            }
            else if (stateIsAuthenticated && isAuthenticated && !intervalPromise) {
                intervalPromise = $interval(function () {
                    CoreService.getMeProfile();
                }, 90000);
            }
        });
    });
})
();