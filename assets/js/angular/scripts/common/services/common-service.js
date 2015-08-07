angular.module('qwikly')
    .service('CommonService', function ($q, $translate, Restangular, $modal, CoreService) {
        return {
            successAlert: function () {
                swal({
                    title: $translate.instant('success_alert_title'),
                    text: $translate.instant('success_alert_message'),
                    timer: 2000,
                    type: 'success'
                })
            },
            errorAlert: function () {
                swal({
                    title: $translate.instant('error_alert_title'),
                    text: $translate.instant('error_alert_message'),
                    timer: 2000,
                    type: 'error'
                })
            },
            confirm: function (successPromise, secure, text, title) {
                var deferred = $q.defer();

                /* Global variables */
                var validityNumber, validityErrorMessage;
                var type = '';
                title = title ? title : $translate.instant('confirm_title');
                text = text ? text : $translate.instant('confirm_text');

                /* If the confirm modal is secure, we add additional variables  */
                if (secure) {
                    type = 'input';
                    validityNumber = Math.round(Math.random() * 10000000) + 1;
                    validityErrorMessage = $translate.instant('please_enter_correct_validity_number');
                    text = text + ' ' + $translate.instant('confirm_by_entering_validity_number') + ': ' + validityNumber;
                }

                /* Handle the received successPromise */
                var successPromiseHandler = function () {
                    successPromise().then(function (response) {
                        deferred.resolve(response);
                        swal.close();
                    }, function (error) {
                        deferred.reject(error);
                    })
                };

                swal({
                    title: title,
                    text: text,
                    type: type,
                    showCancelButton: true,
//                    confirmButtonColor: "#913D88",
                    confirmButtonText: $translate.instant('yes'),
                    cancelButtonText: $translate.instant('no'),
                    closeOnConfirm: false,
                    closeOnCancel: true
                }, function (value) {
                    /* If value is set */
                    if (value) {
                        /* Handle non secure alert */
                        if (!secure) {
                            successPromiseHandler();
                        }
                        /* Handle secure alert */
                        else if (secure) {
                            if (value != validityNumber) {
                                swal.showInputError(validityErrorMessage);
                            } else {
                                successPromiseHandler();
                            }
                        }
                    }
                    /* If value has not been set */
                    else {
                        if (value === false) return false;
                        /* Handle secure alert */
                        if (secure) {
                            swal.showInputError(validityErrorMessage);
                            return false;
                        }
                    }
                });

                return deferred.promise;
            },
            openModal: function (templateUrl, controller, data, windowClass, size) {
                if (CoreService.isAuthenticated()) {
                    windowClass = windowClass ? windowClass : 'modal-alfa';
                    size = size ? size : 'md';

                    return $modal.open({
                        templateUrl: templateUrl,
                        size: size,
                        controller: controller,
                        windowClass: windowClass,
                        resolve: {
                            data: function () {
                                return data;
                            }
                        }
                    });
                }
            },
            postDataWithFile: function (method, path, element, key) {
                var copy = angular.copy(element);
                var strippedData = Restangular.stripRestangular(copy);
                var fd = new FormData();

                delete strippedData[key];
                _.each(strippedData, function (val, key) {
                    fd.append(key, val);
                });

                element[key] = element[key] ? element[key] : {};
                if (element[key].name) {
                    fd.append(key, element[key]);
                }

                return Restangular.one(path)
                    .withHttpConfig({transformRequest: angular.identity})
                    .customOperation(method, '', undefined, {'Content-Type': undefined}, fd);
            }
        }
    });