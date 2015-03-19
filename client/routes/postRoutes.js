// Define routes to connect paths, templates, data and subscriptions.
// Put fixed routes first, otherwise the routes that contain variables may pick
// them up!

Router.map(function () {
	// List all posts.
	this.route('postIndex', {
		path: '/posts',
		waitOn: function () {
			// Don't render until the subscription returns records.
			return Meteor.subscribe('posts');
		},
		data: function () {
			// Send data to the template.
			return {
				posts: Posts.find().fetch()
			};
		}
	});

	// Insert a new post.
	this.route('postNew', {
		path: '/posts/new'
	});

	// View a single post.
	this.route('postSingle', {
		path: '/posts/:_id',
		waitOn: function () {
			return Meteor.subscribe('post', this.params._id);
		},
		data: function () {
			// Fetch this post and its author.
			var post = Posts.findOne(this.params._id);
			if (post) {
				var author = Meteor.users.findOne(post.authorId);
			}
			return {
				post: post,
				author: author
			};
		}
	});

	// Edit a post.
	this.route('postEdit', {
		path: '/posts/:_id/edit',
		waitOn: function () {
			return Meteor.subscribe('post', this.params._id);
		},
		data: function () {
			var post = Posts.findOne(this.params._id);
			return {
				post: post,
				author: Meteor.users.findOne(post.authorId)
			};
		}
	});
});
