(function () {
    var app = angular.module('qwikly');

    app.provider('qwikly', function () {
        var initInjector = angular.injector(['ng']);
        var $http = initInjector.get('$http');
        var $q = initInjector.get('$q');

        var config = {};

        return {
            $getConfig: function (settings) {
                var deferred = $q.defer();

                $http.get(settings.jsonConfigFile)
                    .then(function (response) {
                        deferred.resolve(response.data)
                    },
                    function (error) {
                        deferred.reject(error)
                    });

                return deferred.promise;
            },
            $get: {}
        }
    });
})();