'use strict';

describe('myApp.news module', function() {

    beforeEach(module('myApp.news'));

    describe('news controller', function(){

        it('should ....', inject(function($controller) {
            //spec body
            var view1Ctrl = $controller('NewsCtrl');
            expect(view1Ctrl).toBeDefined();
        }));

    });
});
