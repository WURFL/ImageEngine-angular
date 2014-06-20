describe("Unit: Testing angular directive for WURFL Image Tailor", function() {

    var scope, compile;

    beforeEach(module('angular-wurfl-image-tailor'));

    beforeEach(inject(
        ['$compile','$rootScope', function($c, $r) {
            compile = $c;
            scope = $r;
        }]
    ));

    it('should work as an element', function () {
        var elt = angular.element('<img-wit></img-wit>');
        compile(elt)(scope);
        scope.$digest();

        expect(elt.html()).to.be.a('string');
        expect(elt.html()).to.be.equal('<div class="wit"><img src=""></div>');
    });

    it('should work as an element with image source', function () {
        var elt = angular.element('<img-wit src="http://test.com/image.jpg"></img-wit>');
        compile(elt)(scope);
        scope.$digest();

        expect(elt.html()).to.be.a('string');
        expect(elt.html()).to.be.equal('<div class="wit"><img src="//wit.wurfl.io/http://test.com/image.jpg"></div>');
    });

    it('should work as an element with image source and param attribute', function () {
        var elt = angular.element('<img-wit src="http://test.com/image.jpg" w="200"></img-wit>');
        compile(elt)(scope);
        scope.$digest();

        expect(elt.html()).to.be.a('string');
        expect(elt.html()).to.be.equal('<div class="wit"><img src="//wit.wurfl.io/w_200/http://test.com/image.jpg"></div>');
    });

});