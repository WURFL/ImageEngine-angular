/*
 * angular-wurfl-image-tailor v0.9.0
 * Authors: Luca Corbo (https://github.com/lucor)
 * (c) 2014 ScientiaMobile, Inc.
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
    .directive('imgWit', function (witUrls) {
        return {
            restrict: 'E',
            replace: false,
            scope:{},
            template: '<div class="wit"><img src="{{wit_link}}"/></div>',
            link: function (scope, element, attributes) {
                var wit_link_pieces = [witUrls.get()];
                var src =  attributes['src'];
                if (!src) return;
                angular.forEach(attributes['$attr'], function(attr) {
                    if (attr != 'src') {
                        wit_link_pieces.push(attr + '_' + attributes[attr]);
                    }
                });
                wit_link_pieces.push(src);
                scope.wit_link = wit_link_pieces.join('/');
            }
        }
    });
