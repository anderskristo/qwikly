(function () {
    var app = angular.module('qwikly');

    app.controller('SignInCtrl',
        function ($scope, CoreService) {

            $scope.signInCredentials = {};
            $scope.formErrors = {};

            $scope.isEmailValid = function () {
                if ($scope.signInForm.$pristine) {
                    return true;
                } else {
                    return validateEmail($scope.signInCredentials.email);
                }
            };

            $scope.isPasswordValid = function () {
                if ($scope.signInForm.$pristine) {
                    return true;
                } else if (!$scope.signInForm.password) {
                    return false;
                }
            };

            $scope.signIn = function () {
                CoreService.signIn($scope.signInCredentials)
                    .then(function (response) {
                        /* Do something */
                    }, function (error) {
                        $scope.formErrors = error.data;
                    });
            }
        });
})();
