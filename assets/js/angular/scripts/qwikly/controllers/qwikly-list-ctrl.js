(function () {
    var app = angular.module('qwikly');

    app.controller('QwiklyListCtrl', function ($scope, QwiklyService, CommonService) {
        $scope.currentQwiklyPage = QwiklyService.getCurrentPage();
        var currentPageAPIUri = $scope.currentQwiklyPage.api_uri;

        $scope.showDeleteButton = function () {
            return $scope.currentQwiklyPage.delete === true;
        };

        $scope.showEditButton = function () {
            if ($scope.currentQwiklyPage.edit !== false) {
                return true;
            }
        };

        $scope.showCreateNewButton = function () {
            if ($scope.currentQwiklyPage.create !== false) {
                return true;
            }
        };

        $scope.showOptions = function () {
            if ($scope.showDeleteButton || $scope.showEditButton) {
                return true;
            }
        };

        $scope.deleteItem = function (item) {
            QwiklyService.deleteItem(item)
                .then(function (response) {
                    CommonService.successAlert();
                    _.remove($scope.qwiklyListResponse, {id: item.id});
                }, function () {
                    CommonService.errorAlert();
                });
        };

        $scope.openListItemEditModal = function (item) {
            var data = { item: item };
            CommonService.openModal('qwikly/generics/modals/list/list-edit-modal.html', 'ListItemEditCtrl', data)
        };

        $scope.openListItemCreateModal = function () {
            var data = {
                modalTitle: $scope.currentQwiklyPage.title,
                listAPIUri: currentPageAPIUri,
                list: $scope.qwiklyListResponse
            };

            CommonService.openModal('qwikly/generics/modals/list/list-create-modal.html', 'ListItemCreateCtrl', data)
        };

        QwiklyService.getList(currentPageAPIUri)
            .then(function (response) {
                $scope.qwiklyListResponse = response;
            }, function (error) {
                /* Do something on error */
            })
    });
})();