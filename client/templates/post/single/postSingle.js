Template.postSingle.events({
	'click #deletePost': function () {
		if (window.confirm('Are you sure you want to delete "' + this.post.title + '"?')) {
			Posts.remove(this.post._id, function (error) {
				if (error) {
					Alerts.add(error.reason);
				} else {
					// After deleting, go back to the index.
					Router.go('postIndex');
				}
			});
		}
	}
});
