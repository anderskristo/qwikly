angular.module('qwikly')
    .directive('fieldError', function () {
        return {
            replace: true,
            scope: {
                'errors': '='
            },
            templateUrl: 'common/directives/field-error.html'
        };
    });