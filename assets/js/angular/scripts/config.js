(function () {
    var app = angular.module('qwikly');

    app.config(function ($httpProvider, RestangularProvider, $translateProvider, $locationProvider, jwtInterceptorProvider, qwiklyProvider) {
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

        RestangularProvider.setRequestSuffix('/');
        RestangularProvider.setBaseUrl('/api/v1');

        $translateProvider.preferredLanguage('sv');

        $translateProvider.useStaticFilesLoader({
            prefix: '/static/angular/locale/locale-',
            suffix: '.json'
        });

        qwiklyProvider.$getConfig({jsonConfigFile: 'qwikly-config.json'})
            .then(function (qwiklyConfig) {
                console.info(qwiklyConfig);
                RestangularProvider.setBaseUrl(qwiklyConfig.base_api_url);
            });

        $locationProvider.html5Mode(true);

        /* Get token */
        jwtInterceptorProvider.tokenGetter = [function () {
            return localStorage.getItem('jwt_token');
        }];

        /* Push token on requests */
        $httpProvider.interceptors.push('jwtInterceptor');
    });
})();