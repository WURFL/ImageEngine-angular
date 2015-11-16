describe("Unit: Testing angular provider for ImageEngine", function() {

    var provider;

    beforeEach(module('image-engine-angular', function(imgEngConfigProvider) {
        provider = imgEngConfigProvider;
    }));

    it('tests the providers internal function', inject(function() {
        provider.setToken('a-token');
        expect(provider.$get().token).to.be.equal('a-token');
        expect(provider.$get().is_lite).to.be.false;
        provider.isLite();
        expect(provider.$get().is_lite).to.be.true;
    }));

});
