(function () {
    var app = angular.module('qwikly');

    app.directive('qwiklyField', function (QwiklyFieldKind, $templateCache, $compile) {

        var linker = function ($scope, $el, $attrs) {
            $scope.QwiklyFieldKind = QwiklyFieldKind;

            var template = '';

            switch ($scope.fieldKind) {
                case QwiklyFieldKind.charField:
                    template = $templateCache.get('qwikly/directives/qwikly-field/char-field.html');
                    break;
                case QwiklyFieldKind.integerField:
                    template = $templateCache.get('qwikly/directives/qwikly-field/integer-field.html');
                    break;
                case QwiklyFieldKind.checkbox:
                    template = $templateCache.get('qwikly/directives/qwikly-field/checkbox.html');
                    break;
            }

            $el.html(template);
            $compile($el.contents())($scope);
        };

        return {
            link: linker,
            scope: {
                ngModel: '=',
                fieldKind: '='
            }
        }
    });
})();