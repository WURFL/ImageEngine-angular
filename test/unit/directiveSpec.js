describe("Unit: Testing angular directive for ImageEngine", function() {

    var scope, compile, provider;

    beforeEach(module('image-engine-angular', function(imgEngConfigProvider) {
        provider = imgEngConfigProvider;
        provider.setToken('token');
    }));

    beforeEach(inject(
        ['$compile','$rootScope', '$sce', function($c, $r, $sce) {
            compile = $c;
            scope = $r;
            sce = $sce;
        }]
    ));

    it('should work as an element', function () {
        var elt = angular.element('<img-eng></img-eng>');
        compile(elt)(scope);
        scope.$digest();

        expect(elt.html()).to.be.a('string');
        expect(elt.html()).to.be.equal('<div class="img-eng"><img ng-src=""></div>');
    });

    it('should work as an element with image source', function () {
        var elt = angular.element('<img-eng src="http://test.com/image.jpg"></img-eng>');
        compile(elt)(scope);
        scope.$digest();

        expect(elt.html()).to.be.a('string');
        expect(elt.html()).to.be.equal('<div class="img-eng"><img ng-src="//token.imgeng.in/http://test.com/image.jpg" src="//token.imgeng.in/http://test.com/image.jpg"></div>');
    });

    it('should work as an element with image source and param attribute', function () {
        var elt = angular.element('<img-eng src="http://test.com/image.jpg" w="200"></img-eng>');
        compile(elt)(scope);
        scope.$digest();

        expect(elt.html()).to.be.a('string');
        expect(elt.html()).to.be.equal('<div class="img-eng"><img ng-src="//token.imgeng.in/w_200/http://test.com/image.jpg" src="//token.imgeng.in/w_200/http://test.com/image.jpg"></div>');
    });

    it('should work as an element with ngSrc directive', function () {
        var elt = angular.element('<img-eng ng-src="http://test.com/image.jpg"></img-eng>');
        compile(elt)(scope);
        scope.$digest();

        expect(elt.html()).to.be.a('string');
        expect(elt.html()).to.be.equal('<div class="img-eng"><img ng-src="//token.imgeng.in/http://test.com/image.jpg" src="//token.imgeng.in/http://test.com/image.jpg"></div>');
    });

    it('should work as an element with ngSrc directive and a trusted resource', function () {
        scope.myUrl = sce.trustAsResourceUrl('http://test.com/image.jpg');
        var elt = angular.element('<img-eng ng-src="{{myUrl}}" w="200"></img-eng>');
        compile(elt)(scope);
        scope.$digest();

        expect(elt.html()).to.be.a('string');
        expect(elt.html()).to.be.equal('<div class="img-eng"><img ng-src="//token.imgeng.in/w_200/http://test.com/image.jpg" src="//token.imgeng.in/w_200/http://test.com/image.jpg"></div>');
    });

    it('should change when ngSrc directive variable change', function () {
        scope.myUrl = sce.trustAsResourceUrl('http://test.com/image.jpg');
        var elt = angular.element('<img-eng ng-src="{{myUrl}}"></img-eng>');
        compile(elt)(scope);
        scope.$digest();
        scope.myUrl = sce.trustAsResourceUrl('http://test.com/image2.jpg');
        scope.$digest();

        expect(elt.html()).to.be.a('string');
        expect(elt.html()).to.be.equal('<div class="img-eng"><img ng-src="//token.imgeng.in/http://test.com/image2.jpg" src="//token.imgeng.in/http://test.com/image2.jpg"></div>');
    });

    it('should change when ngSrc directive variable change from undefined', function () {
        scope.myUrl = undefined;
        var elt = angular.element('<img-eng ng-src="{{myUrl}}"></img-eng>');
        compile(elt)(scope);
        scope.$digest();
        scope.myUrl = sce.trustAsResourceUrl('http://test.com/image2.jpg');
        scope.$digest();

        expect(elt.html()).to.be.a('string');
        expect(elt.html()).to.be.equal('<div class="img-eng"><img ng-src="//token.imgeng.in/http://test.com/image2.jpg" src="//token.imgeng.in/http://test.com/image2.jpg"></div>');
    });

    it('should ignore invalid attribute', function () {
        var elt = angular.element('<img-eng src="http://test.com/image.jpg" w="200" in="true" a="invalid"></img-eng>');
        compile(elt)(scope);
        scope.$digest();

        expect(elt.html()).to.be.a('string');
        expect(elt.html()).to.be.equal('<div class="img-eng"><img ng-src="//token.imgeng.in/w_200/in_true/http://test.com/image.jpg" src="//token.imgeng.in/w_200/in_true/http://test.com/image.jpg"></div>');
    });

});
