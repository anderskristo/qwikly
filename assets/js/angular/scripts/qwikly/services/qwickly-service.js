(function () {
    var app = angular.module('qwikly');

    app.service('QwiklyService', function ($state, Restangular, CommonService) {

        var QwiklyAPI = Restangular.withConfig(function (RestangularConfigurer) {
            RestangularConfigurer.setBaseUrl("https://www.protimr.com/api/v1/");
        });

        return {
            getConfig: function () {
                return window.qwiklyConfig;
            },
            getAllPages: function () {
                return window.qwiklyPages;
            },
            getCurrentPage: function () {
                return _.find(this.getAllPages(), function (obj) {
                    return obj.angular_state_name == $state.current.name;
                });
            },
            getList: function (path) {
                return QwiklyAPI.all(path).getList();
            },
            deleteItem: function (item) {
                return CommonService.confirm(item.remove, true);
            },
            saveItem: function (item) {
                return item.save()
            },
            createNewItem: function (path, data) {
                return QwiklyAPI.all(path).post(data);
            },
            setPages: function () {
                window.qwiklyPages = [
                    {
                        "title": "Project List",
                        "description": "Cras efficitur magna non interdum pulvinar. Nunc placerat nunc dolor. Integer gravida augue id mattis vestibulum. Quisque pulvinar, nibh eget pretium pulvinar, felis libero condimentum justo, id vestibulum turpis diam sit amet sapien. Duis vestibulum rutrum aliquet. Donec lectus justo, auctor quis interdum non, mattis id tellus. Fusce eleifend a massa at euismod. Nunc vel risus vitae urna tincidunt blandit non sit amet nunc.",
                        "angular_state_name": "authenticated.projects",
                        "frontend_uri": "/account/projects/",
                        "api_uri": "job/projects/",
                        "list": {
                            "pagination": true,
                            "fields": [
                                {"key": "id", "title": "ID"},
                                {"key": "title", "title": "Title"},
                                {"key": "currency_key", "title": "Currency"},
                                {"key": "pricing_kind_i18n", "title": "Pricing kind"}
                            ],
                            "search_fields": ["title" ],
                            "filter": [
                                {
                                    "label": "Start Date",
                                    "field": "start_date",
                                    "type": "1",
                                    "api_url": ""
                                },
                                {
                                    "label": "User",
                                    "field": "user",
                                    "type": "0",
                                    "api_url": "/api/v1/core/users"
                                }
                            ]
                        },
                        "create": {
                            "fields": [
                                {"key": "title", "title": "Title", "kind": 0},
                                {"key": "currency", "title": "Currency", "kind": 2},
                                {"key": "pricing_kind", "title": "Pricing kind", "kind": 2}
                            ]
                        },
                        "edit": {
                            "fields": [
                                {"key": "title", "title": "Title", "kind": 0},
                                {"key": "currency", "title": "Currency", "kind": 2},
                                {"key": "pricing_kind", "title": "Pricing kind", "kind": 2}
                            ]
                        },
                        "delete": true
                    },
                    {
                        "title": "Project List Copy",
                        "description": "Maecenas vel eros ac eros pharetra varius. Nulla fringilla erat dolor, non volutpat dui auctor ut. Proin in elementum ligula. Proin fringilla, nibh et cursus porta, tortor sem semper lacus, quis consectetur diam odio eu erat. Nam luctus suscipit mauris, quis facilisis justo efficitur ut. Vivamus luctus rhoncus sodales. Proin eget dictum magna, non efficitur tellus. Nulla eget diam elit.",
                        "angular_state_name": "authenticated.projects2",
                        "frontend_uri": "/account/projects2/",
                        "api_uri": "job/projects/",
                        "list": {
                            "pagination": true,
                            "fields": [
                                {"key": "id", "title": "ID"},
                                {"key": "title", "title": "Title"},
                                {"key": "currency_key", "title": "Currency"},
                                {"key": "pricing_kind_i18n", "title": "Pricing kind"}
                            ],
                            "search_fields": ["title" ],
                            "filter": [
                                {
                                    "label": "Start Date",
                                    "field": "start_date",
                                    "type": "1",
                                    "api_url": ""
                                },
                                {
                                    "label": "User",
                                    "field": "user",
                                    "type": "0",
                                    "api_url": "/api/v1/core/users"
                                }
                            ]
                        },
                        "create": {
                            "fields": [
                                {"key": "title", "title": "Title", "kind": 0},
                                {"key": "currency", "title": "Currency", "kind": 2},
                                {"key": "pricing_kind", "title": "Pricing kind", "kind": 2}
                            ]
                        },
                        "edit": {
                            "fields": [
                                {"key": "title", "title": "Title", "kind": 0},
                                {"key": "currency", "title": "Currency", "kind": 2},
                                {"key": "pricing_kind", "title": "Pricing kind", "kind": 2}
                            ]
                        },
                        "delete": true
                    }
                ];

                return window.qwiklyPages;
            }
        };
//        return {
//            $getPages: function () {
//                var deferred = $q.defer();
//
//                console.info("Trying to get qwikly pages...");
//
////                if (window.qwiklyConfig) {
////                    var url = window.qwiklyConfig.use_local_pages ? window.qwiklyConfig.qwikly_page_url : 'qwikly-local-pages.json';
//                var url = 'qwikly-local-pages.json';
//
//                $http.get(url)
//                    .then(function (response) {
//                        var qwiklyLocalPages = response.data.pages;
//                        $rootScope.qwiklyLocalPages = qwiklyLocalPages;
//                        deferred.resolve(qwiklyLocalPages);
//
//                        console.info(qwiklyLocalPages);
//                    },
//                    function (error) {
//                        deferred.reject(error);
//                        console.error(error);
//                    });
////                } else {
////                    deferred.reject('Could not find window.qwiklyConfig');
////                }
//
//                return deferred.promise
//            }
//        }
    });
})();