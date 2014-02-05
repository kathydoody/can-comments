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

    it("should add new comments to the list", function(){

        var newTitle = F('#inputTitle');
        newTitle.type('Super Comment');
        var newComment = F('#textComment');
        newComment.type('This is a very, very long comment about very interesting things')

        F('#addBtn').click();

        var allListElements = F("#comments").find('li').length;  // need to select from the test runner's iFrame
        expect(allListElements).toBe(4);

    })

});