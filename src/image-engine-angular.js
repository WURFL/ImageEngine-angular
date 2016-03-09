'use strict';
/*
 * image-engine-angular
 * An AngularJS directive for ImageEngine
 * Homepage: https://github.com/WURFL/ImageEngine-angular
 * Authors: Luca Corbo (https://github.com/lucor)
 * (c) 2014 - 2016 ScientiaMobile, Inc.
 * License: MIT
 */

angular.module('image-engine-angular', [])
    .provider('imgEngConfig', function () {
        this.is_lite = false;
        this.token = null;
        this.setToken = function (token) {
            this.token = token;
        };
        this.isLite = function () {
            this.is_lite = true;
        };
        this.$get = function () {
            return this;
        };
    })
    .factory('imgEngUrls', ['imgEngConfig', function (imgEngConfig) {
        var base_url = ['//' + imgEngConfig.token];

        if (imgEngConfig.is_lite === true) {
            base_url.push('lite');
        }

        base_url.push('imgeng.in');

        return {
            get: function () {
                return base_url.join('.');
            }
        };
    }])
    .directive('imgEng', ['imgEngUrls', function (imgEngUrls) {
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
                return '<div class="img-eng"><img ng-src="{{imgeng_link}}"/></div>';
            },
            link: function (scope, element, attributes) {
                scope.imgeng_link = '';

                var allowedAttributes = ['w', 'h', 'pc', 'm', 'f', 'r'];

                scope.$watchCollection('[src, w, h, pc, m, f, r]', function (values, oldValues) {

                    var src = values.shift();
                    if (!src) {
                        return;
                    }

                    var imgeng_link_pieces = [imgEngUrls.get()];
                    angular.forEach(allowedAttributes, function (attribute, index) {
                        if (values[index]) {
                            imgeng_link_pieces.push(attribute + '_' + values[index]);
                        }
                    });

                    imgeng_link_pieces.push(src);
                    scope.imgeng_link = imgeng_link_pieces.join('/');
                });
            }
        };
    }]);
