/**
 * Created by Kathy Doody on 1/30/14.
 */


/**
 * For development only
 * Remove fixture & store when actual APIs
 * are used
 */
var commentStore = can.fixture.store(3,function(id){
    return {
        comment_title: "Comment " + parseInt(id + 1),
        comment_text: 'Lots of text from an important comment'
    }
});

can.fixture ({
    'GET comment': commentStore.findAll,
    'GET comment/{id}': commentStore.findOne,
    'POST comment': commentStore.create,
    'PUT comment/{id}': commentStore.update,
    'DELETE comment/{id}': commentStore.destroy
})

Comment = can.Model.extend({
    findAll: "GET /comment",
    findOne: "GET /comment/{id}",
    create:  "POST /comment",
    destroy: "DELETE comment/{id}",
    update:  "PUT comment/{id}"

}, {});

/**
 *  comment-list component
 */
can.Component.extend({
    tag: 'comment-list',
    template: can.view("comments/template/commentList.hbs"),
    scope:{

    }

});

/**
 *  comments component
 */
can.Component.extend({
    tag: "comments",

    scope:{
        comments: new Comment.List({}),  // this calls findAll on the Comment Model and returns the list

   /*     activeComments: function(){

            return this.comments;

        }*/

    }

});

//can.route(":filter");  // makes a pretty url
can.route.ready();

var frag = can.view("comments/template/comments.hbs", {});

$("#comments").html(frag);

