(function () {
    var app = angular.module('qwikly');

    app.directive('spinButton', function ($translate, $q, $timeout) {

        var linker = function ($scope, $el, $attrs) {
            var translationKey = $attrs.translationKey ? $attrs.translationKey : 'submit';
            $scope.type = $attrs.type ? $attrs.type : 'submit';
            $scope.cssClass = $attrs.class ? $attrs.class : 'btn btn-success btn-upper btn-lg';
            $scope.label = $translate.instant(translationKey);

            $el.bind('click', function () {
                var promise = $q.when();

                promise
                    .then(function () {
                        $scope.loading = true;
                        $scope.onClick();
                    })
                    .then(function () {
                        $timeout(function () {
                            $scope.loading = false;
                        }, 100);
                    })
            })
        };

        return {
//            replace: true,
            link: linker,
            scope: {
                onClick: '=',
                ngDisabled: '='
            },
            templateUrl: 'common/directives/spin-button.html'
        }
    });
})();