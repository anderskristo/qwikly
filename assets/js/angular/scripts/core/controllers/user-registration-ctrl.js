(function () {
    var app = angular.module('qwikly');

    app.controller('UserRegistrationCtrl',
        function ($scope, CoreService) {

            $scope.signUpCredentials = {};

            $scope.isEmailValid = function () {
                if ($scope.signUpForm.$pristine) {
                    return true;
                } else {
                    return validateEmail($scope.signUpCredentials.email);
                }
            };

            $scope.isPasswordValid = function () {
                if ($scope.signUpCredentials.password == $scope.signUpCredentials.password2) {
                    return true;
                }
            };

            $scope.signUp = function () {
                CoreService.signUp($scope.signUpCredentials)
                    .then(function (response) {
                        $scope.signUpCredentials = {};
                    }, function (error) {
                        $scope.formErrors = error.data;
                    })
            }
        });
})();
