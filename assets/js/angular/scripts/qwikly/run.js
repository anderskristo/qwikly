(function () {
    var app = angular.module('qwikly');
    app.run(function (QwiklyService) {
//        QwiklyService.setConfig();
        QwiklyService.setPages();
    });
})();