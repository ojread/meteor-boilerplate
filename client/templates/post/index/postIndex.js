Template.postIndexItem.helpers({
    authorName: function () {
        var author = Meteor.users.findOne(this.authorId);
        return author.username;
    }
});
