(function () {
    var app = angular.module('qwikly');

    app.controller('ListItemEditCtrl', function ($scope, $modalInstance, data, QwiklyService, CommonService, $translate) {
        $scope.item = data.item;

        $scope.currentQwiklyPage = QwiklyService.getCurrentPage();

        $scope.cancel = function () {
            $modalInstance.dismiss($translate.instant('cancel'));
        };

        $scope.save = function () {
            QwiklyService.saveItem($scope.item)
                .then(function () {
                    CommonService.successAlert();
                }, function () {
                    CommonService.errorAlert();
                });
        }
    });
})();