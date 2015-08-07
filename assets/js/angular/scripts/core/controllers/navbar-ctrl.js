(function () {
    var app = angular.module('qwikly');

    app.controller('NavbarCtrl',
        function ($scope, $rootScope, CoreService, QwiklyService) {
            $scope.toggleNavbar = function () {
                $scope.isNavbarCollapsed = !$scope.isNavbarCollapsed;
            };

            $scope.signOut = function () {
                CoreService.signOut();
            };

            $rootScope.$on('$stateChangeSuccess', function () {
                $scope.isNavbarCollapsed = false;
            });

            $scope.qwiklyPages = QwiklyService.getAllPages()

        });
})();
