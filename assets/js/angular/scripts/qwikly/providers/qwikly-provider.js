(function () {
    var app = angular.module('qwikly');

    app.provider('qwikly', function () {
        var initInjector = angular.injector(['ng']);
        var $http = initInjector.get('$http');
        var $q = initInjector.get('$q');

        var pages = {};
        var config = {};

        return {
            $setPages: function (settings) {
                var deferred = $q.defer();

                $http.get(settings.jsonUrl)
                    .then(function (response) {
                        pages = response.data.pages;
                        deferred.resolve(pages);
                    });

                return deferred.promise;
            },

            $setConfig: function (settings) {
                $http.get(settings.jsonUrl)
                    .then(function (response) {
                        config = response.data;
                    })
            },

            $get: function () {
                return {
                    pages: pages,
                    config: config
                }
            }
        }
    });
})();