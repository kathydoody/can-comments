/**
 * Created by Kathy Doody on 1/30/14.
 */

beforeEach(function(){

    F.open('app.html');
})

describe('Hello World!', function() {
    it('should contain hello world', function() {

        F('h1').text('Hello World!');
    });
});