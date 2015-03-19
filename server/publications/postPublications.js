// Publish the titles of all posts with the author's username.
// No need to publish all fields.
Meteor.publish('posts', function () {
	Meteor.publishWithRelations({
		handle: this,
		collection: Posts,
		filter: {},
		options: {
			fields: {
				title: 1,
				authorId: 1
			}
		},
		mappings: [{
			key: 'authorId',
			collection: Meteor.users,
			options: {
				fields: {username: 1}
			}
		}]
	});
});

// Publish all fields of a single post plus the username of the author.
// The publish with relations package makes sure we only publish what we need
// but it doesn't join the records - that's up to the client if necessary.
Meteor.publish('post', function (id) {
	Meteor.publishWithRelations({
		handle: this,
		collection: Posts,
		filter: id,
		mappings: [{
			key: 'authorId',
			collection: Meteor.users,
			options: {
				fields: {username: 1}
			}
		}]
	});
});
