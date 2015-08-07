(function () {
    var app = angular.module('qwikly');

    app.config(function ($httpProvider, RestangularProvider, $translateProvider, $locationProvider, jwtInterceptorProvider) {
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

        $translateProvider.preferredLanguage('sv');


        $translateProvider.useStaticFilesLoader({
            prefix: '/static/angular/locale/locale-',
            suffix: '.json'
        });

        RestangularProvider.setRequestSuffix('/');
        RestangularProvider.setBaseUrl("https://www.protimr.com/api/v1/");

//        qwiklyProvider.$setConfig({jsonConfigFile: 'qwikly-config.json'})
//            .then(function (qwiklyConfig) {
//                RestangularProvider.setRequestSuffix('/');
//                RestangularProvider.setBaseUrl(qwiklyConfig.base_api_url);
//            });

//        qwiklyProvider.$setPages({jsonUrl: 'qwikly-local-pages.json'});

        $locationProvider.html5Mode(true);


        /* Get token */
        jwtInterceptorProvider.tokenGetter = [function () {
            return localStorage.getItem('jwt_token');
        }];

        /* Push token on requests */
        $httpProvider.interceptors.push('jwtInterceptor');
    });
})();