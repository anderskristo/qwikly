(function () {
    var app = angular.module('qwikly');

    app.config(function ($analyticsProvider) {
        /* Records pages that don't use $state or $route */
        $analyticsProvider.firstPageview(true);

        /* Records full path */
        $analyticsProvider.withBase(true);
    });
})();