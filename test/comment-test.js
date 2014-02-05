/**
 * Created by Kathy Doody on 1/30/14.
 */

F.speed = 100;

describe("A Comments Component", function(){

    beforeEach(function(){
      F.open('app.html'); //opens app so you can see interactions
    });

    it("should display the list of comments", function(){
        var allListElements = F("#comments").find('li').length;  // need to select from the test runner's iFrame
        expect(allListElements).toBe(3);

    });

});