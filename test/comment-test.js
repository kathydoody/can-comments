/**
 * Created by Kathy Doody on 1/30/14.
 */

F.speed = 100;

describe("A Comments Component", function(){

    beforeEach(function(){
      F.open('app.html'); //opens app so you can watch interactions
    });

    it("should display the list of comments", function(){
        var allListElements = F("#comments").find('li').length;
        expect(allListElements).toBe(3);
    });

    it("should add new comments to the list", function(){

        var newTitle = F('#inputTitle');
        newTitle.type('Super Comment');
        var newComment = F('#textComment');
        newComment.type('This is a very, very long comment about very interesting things')

        F('#addBtn').click(F.wait(2000,function(){
            alert('button clicked');

        }));

        F("#comments li.commentItem").exists(function() {
            var allListElements = F("#comments").find('li').length;
            expect(allListElements).toBe(4);
        });




    })

});