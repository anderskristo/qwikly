(function () {
    var app = angular.module('qwikly');
    app.service('CoreService',
        function ($state, $q, $rootScope, Restangular, jwtHelper) {
            return {
                storeAuthorizationToken: function (token) {
                    localStorage.setItem('jwt_token', token);
                },
                clearAuthorizationToken: function () {
                    localStorage.removeItem('jwt_token');
                },
                getMeProfile: function () {
                    var CoreService = this;
                    var deferred = $q.defer();

                    Restangular.one('core/me').get()
                        .then(function (response) {
                            deferred.resolve(response);
                        }, function (error) {
                            deferred.reject(error);
                            CoreService.signOut();
                        });

                    return deferred.promise;
                },
                getUserProfiles: function () {
                    return Restangular.all('core/user-profiles').getList();
                },
                setCurrentUser: function () {
                    this.getMeProfile()
                        .then(function (response) {
                            $rootScope.currentUser = response;
                        })
                },
                isAuthenticated: function () {
                    var token = localStorage.getItem('jwt_token');

                    if (token) {
                        if (!jwtHelper.isTokenExpired(token)) {
                            return true;
                        }
                    }

                    return false;
                },
                redirectIfAuthorized: function () {
                    if (this.isAuthenticated()) {
                        $state.go('authenticated');
                    }
                },
                redirectIfUnauthorized: function () {
                    if (!this.isAuthenticated()) {
                        $state.go('guest');
                    }
                },
                signUp: function (credentials) {
                    var deferred = $q.defer();
                    var CoreService = this;

                    Restangular.one('core/user-registration').customPOST(credentials)
                        .then(function (response) {
                            CoreService.storeAuthorizationToken(response.token);
                            CoreService.setCurrentUser();
                            CoreService.redirectIfAuthorized();
                            deferred.resolve(response);
                        }, function (error) {
                            deferred.reject(error);
                        });

                    return deferred.promise;
                },
                signIn: function (credentials) {
                    var deferred = $q.defer();
                    var CoreService = this;

                    Restangular.one('token-auth').customPOST(credentials)
                        .then(function (response) {
                            CoreService.storeAuthorizationToken(response.token);
                            CoreService.setCurrentUser();
                            CoreService.redirectIfAuthorized();
                            deferred.resolve(response);
                        }, function (error) {
                            deferred.reject(error);
                        });

                    return deferred.promise;
                },
                signOut: function () {
                    this.clearAuthorizationToken();
                    $state.go('guest');
                }
            }
        });
})();