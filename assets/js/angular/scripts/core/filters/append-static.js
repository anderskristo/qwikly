(function () {
    var app = angular.module('qwikly');

    app.filter('appendStatic', function (BackendConfig) {
        return function (input, kind) {
            input = input || '';
            if (!kind) {
                return  BackendConfig.MEDIA_URL + input;
            } else {
                return  BackendConfig[kind] + input
            }
        }
    });

})();