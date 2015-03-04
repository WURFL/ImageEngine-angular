/*
 * angular-wurfl-image-tailor
 * Authors: Luca Corbo (https://github.com/lucor)
 * (c) 2014 - 2015 ScientiaMobile, Inc.
 * License: MIT
 */

angular.module('angular-wurfl-image-tailor', [])
    .factory('witUrls', function () {
        var wit_index = 0;
        var wit_urls = ['//wit.wurfl.io', '//wit1.wurfl.io', '//wit2.wurfl.io', '//wit3.wurfl.io', '//wit4.wurfl.io'];
        return {
            get: function () {
                var url = wit_urls[wit_index];
                wit_index++;
                if (wit_index >= wit_urls.length) {
                    wit_index = 0;
                }
                return url;
            }
        };
    })
    .directive('imgWit', ['witUrls', function (witUrls) {
        return {
            restrict: 'E',
            replace: false,
            scope: {
                src: '@',
                w: '@',
                h: '@',
                pc: '@',
                m: '@',
                f: '@',
                r: '@'
            },
            template: function (element, attributes) {
                return '<div class="wit"><img ng-src="{{wit_link}}"/></div>';
            },
            link: function (scope, element, attributes) {
                scope.wit_link = '';

                var allowedAttributes = ['w', 'h', 'pc', 'm', 'f', 'r'];

                scope.$watchCollection('[src, w, h, pc, m, f, r]', function (values, oldValues) {

                    var src = values.shift();
                    if (!src) {
                        return;
                    }

                    var wit_link_pieces = [witUrls.get()];
                    angular.forEach(allowedAttributes, function (attribute, index) {
                        if (values[index]) {
                            wit_link_pieces.push(attribute + '_' + values[index]);
                        }
                    });

                    wit_link_pieces.push(src);
                    scope.wit_link = wit_link_pieces.join('/');
                });
            }
        }
    }]);
