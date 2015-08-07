angular.module('qwikly')
    .directive('searchField', function ($parse, $translate) {

        /**
         *  This directive takes run="" and collection="" as attributes.
         *
         *  The 'run' attribute is converted into a expression handler
         *  which gets initialized when our search field gets some value.
         *
         *  The 'collection' attribute is saved in our memory and will gets restored
         *  to its initial value when the search field returns empty.
         * **/


        var linker = function ($scope, $el, $attrs) {
            var expressionHandler = _.debounce($parse($attrs.run)($scope), 500);
            var placeholderLocaleKey = $attrs.placeholder ? $attrs.placeholder : 'what_are_you_looking_for';
            var collectionModel = $parse($attrs.collection);
            var copiedCollectionItems;

            $scope.placeholder = $translate.instant(placeholderLocaleKey);

            $scope.$watch('query.search', function (newVal, oldVal) {

                /**
                 *  If we have a collection set to our search-field, we do some magic and
                 *  restore it to its default values when the search field returns blank
                 **/

                if ($attrs.collection) {
                    /* Save the collection to our oldCollection variable */
                    if (newVal && !oldVal) {
                        copiedCollectionItems = collectionModel($scope);
                    }
                    /* If we return to an empty search field we restore our collection */
                    else if (!newVal && oldVal) {
                        collectionModel.assign($scope, copiedCollectionItems)
                    }
                }

                /**
                 *  If we have a new value we run our expressionHandler
                 *  */

                if (newVal != oldVal && newVal) {
                    $scope.loading = true;
                    expressionHandler();
                    setTimeout(function () {
                        $scope.loading = false;
                    }, 500)
                }
            });
        };

        return {
            replace: true,
            link: linker,
            templateUrl: 'common/directives/search-field.html'
        };
    });