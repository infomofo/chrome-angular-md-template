'use strict';
 
describe('MainCtrl', function(){
    var scope;//we'll use these in our tests
 
    //mock Application to allow us to inject our own dependencies
    beforeEach(angular.mock.module('genericChromeMdApp'));
    //mock the controller for the same reason and include $rootScope and $controller
    beforeEach(angular.mock.inject(function($rootScope, $controller){
        //create an empty scope
        scope = $rootScope.$new();
        //declare the controller and inject our empty scope
        $controller('MainCtrl', {$scope: scope}); 
    }));

    // tests start here
    it('should have data.cb1 be truthy', function(){
        expect(scope.data.cb1).toBe(true);
    });
});