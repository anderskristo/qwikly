(function () {
    var app = angular.module('qwikly');

    app.controller('ListItemCreateCtrl', function ($scope, $modalInstance, data, QwiklyService, CommonService, $translate) {
        var listAPIUri = data.listAPIUri;
        var list = data.list;
        $scope.modalTitle = data.modalTitle;
        $scope.newItem = {participants: [1, ]};

        $scope.currentQwiklyPage = QwiklyService.getCurrentPage();

        $scope.cancel = function () {
            $modalInstance.dismiss($translate.instant('cancel'));
        };

        $scope.createNewItem = function () {
            QwiklyService.createNewItem(listAPIUri, $scope.newItem)
                .then(function (response) {
                    list.unshift(response)
                    CommonService.successAlert();
                }, function (error) {
                    CommonService.errorAlert();
                });
        }
    });
})();