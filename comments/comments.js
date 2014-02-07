/**
 * Created by Kathy Doody on 1/30/14.
 */


/**
 * For development only
 * Simulates REST calls
 */

can.fixture ({
    'GET services/comment': function(){
        return [
            {comment_title: 'A funny comment', comment_text: 'A man walks into a bar...', id: 1},
            {comment_title: 'Comment Number Two', comment_text: 'TDD with Jasmine and FuncUnit is not easy!', id: 2},
            {comment_title: 'Bruins Rock', comment_text: 'The bruins are entering the olympic break in great position.', id: 3}
        ]
    },
    'POST services/comment': function(newCom){
        console.log("you just created a new comment" , newCom);
        return {id: Math.random()}
    },
    'PUT services/comment/{id}': function(){
        console.log("you just edited a todo");
        return {}
    },
    'Delete servicescomment/{id}': function(){
        return {}
    }
})


Comment = can.Model.extend({
    findAll: "services/comment",
    create:  "services/comment",
    destroy: "services/comment/{id}",
    update:  "services/comment/{id}"
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

        /**
         * This is a shortcut to calling findAll() and then
         * assigning the returned Model.List to a variable.
         * Can will do this automagically here.
         */
        comments: new Comment.List({})

    },
    events: {
        "#addBtn click": function () {
            alert("button click handled");
              new Comment({
                comment_title: $('#inputTitle').val(),
                comment_text:   $('#textComment').val()
            }).save(function(){
                      // reset form to blanks
                      $('#inputTitle').val('');
                      $('#textComment').val('');
                  });
        },
        // this is a can listener that work because of template bindings (I think)
        "{Comment} created" : function(Comment, ev, newComment){
           this.scope.attr('comments').push(newComment);
        }
    }
});

can.route.ready();

var frag = can.view("comments/template/comments.hbs", {});
$("#comments").html(frag);


