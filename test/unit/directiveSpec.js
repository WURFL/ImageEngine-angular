describe("Unit: Testing angular directive for WURFL Image Tailor", function() {

    var scope, compile;

    beforeEach(module('angular-wurfl-image-tailor'));

    beforeEach(inject(
        ['$compile','$rootScope', '$sce', function($c, $r, $sce) {
            compile = $c;
            scope = $r;
            sce = $sce;
        }]
    ));

    it('should work as an element', function () {
        var elt = angular.element('<img-wit></img-wit>');
        compile(elt)(scope);
        scope.$digest();

        expect(elt.html()).to.be.a('string');
        expect(elt.html()).to.be.equal('<div class="wit"><img ng-src=""></div>');
    });

    it('should work as an element with image source', function () {
        var elt = angular.element('<img-wit src="http://test.com/image.jpg"></img-wit>');
        compile(elt)(scope);
        scope.$digest();

        expect(elt.html()).to.be.a('string');
        expect(elt.html()).to.be.equal('<div class="wit"><img ng-src="//wit.wurfl.io/http://test.com/image.jpg" src="//wit.wurfl.io/http://test.com/image.jpg"></div>');
    });

    it('should work as an element with image source and param attribute', function () {
        var elt = angular.element('<img-wit src="http://test.com/image.jpg" w="200"></img-wit>');
        compile(elt)(scope);
        scope.$digest();

        expect(elt.html()).to.be.a('string');
        expect(elt.html()).to.be.equal('<div class="wit"><img ng-src="//wit.wurfl.io/w_200/http://test.com/image.jpg" src="//wit.wurfl.io/w_200/http://test.com/image.jpg"></div>');
    });

    it('should work as an element with ngSrc directive', function () {
        var elt = angular.element('<img-wit ng-src="http://test.com/image.jpg"></img-wit>');
        compile(elt)(scope);
        scope.$digest();

        expect(elt.html()).to.be.a('string');
        expect(elt.html()).to.be.equal('<div class="wit"><img ng-src="//wit.wurfl.io/http://test.com/image.jpg" src="//wit.wurfl.io/http://test.com/image.jpg"></div>');
    });

    it('should work as an element with ngSrc directive and a trusted resource', function () {
        scope.myUrl = sce.trustAsResourceUrl('http://test.com/image.jpg');
        var elt = angular.element('<img-wit ng-src="{{myUrl}}" w="200"></img-wit>');
        compile(elt)(scope);
        scope.$digest();

        expect(elt.html()).to.be.a('string');
        expect(elt.html()).to.be.equal('<div class="wit"><img ng-src="//wit.wurfl.io/w_200/http://test.com/image.jpg" src="//wit.wurfl.io/w_200/http://test.com/image.jpg"></div>');
    });

    it('should change when ngSrc directive variable change', function () {
        scope.myUrl = sce.trustAsResourceUrl('http://test.com/image.jpg');
        var elt = angular.element('<img-wit ng-src="{{myUrl}}"></img-wit>');
        compile(elt)(scope);
        scope.$digest();
        scope.myUrl = sce.trustAsResourceUrl('http://test.com/image2.jpg');
        scope.$digest();

        expect(elt.html()).to.be.a('string');
        expect(elt.html()).to.be.equal('<div class="wit"><img ng-src="//wit1.wurfl.io/http://test.com/image2.jpg" src="//wit1.wurfl.io/http://test.com/image2.jpg"></div>');
    });

    it('should change when ngSrc directive variable change from undefined', function () {
        scope.myUrl = undefined;
        var elt = angular.element('<img-wit ng-src="{{myUrl}}"></img-wit>');
        compile(elt)(scope);
        scope.$digest();
        scope.myUrl = sce.trustAsResourceUrl('http://test.com/image2.jpg');
        scope.$digest();

        expect(elt.html()).to.be.a('string');
        expect(elt.html()).to.be.equal('<div class="wit"><img ng-src="//wit.wurfl.io/http://test.com/image2.jpg" src="//wit.wurfl.io/http://test.com/image2.jpg"></div>');
    });

});
