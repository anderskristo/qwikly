(function () {
    var app = angular.module('qwikly');

    app.service('QwiklyFieldKind', function () {
        return {
            charField: 0,
            checkbox: 1,
            integerField: 2
        }
    });
})();