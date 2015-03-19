// Define a database collection and all the ways to interact with it.

Posts = new Mongo.Collection('posts');

/*
Plan all the different ways that records need to be inserted, updated and
removed and define them here. The built-in insert, update and remove methods can
be useful while developing but their all-or-nothing approach makes it difficult
to control data effectively.

The client should run Meteor.call(methodName, args, callback).

You can have multiple arguments but it's more flexible to put them all into one
object as properties.

Any errors encountered can be thrown for the callback function to catch.
On success, the method can return a variable for the client to use.

Methods give you full control over all data but the downside to this is you have
to do extra work to validate and it may be simpler to use Collection2.
*/

/*Meteor.methods({
	insertPost: function (args) {
		// Check that the user is authorised to do this.
		if (Roles.userIsInRole(this.userId, ['admin'])) {

			// Validate the data from the client.
			check([args.title, args.content], [String]);

			// Create the record object to be inserted.
			// Add an author ID field without relying on client data.
			var data = {
				title: args.title,
				content: args.content,
				authorId: this.userId
			};

			// Insert the record, getting its ID.
			var id = Posts.insert(data);

			// Return the id of the inserted record so the client can view it.
			return id;
		} else {
			if (!this.isSimulation) {
				throw new Meteor.Error('unauthorised', 'You are not authorised to insert this post.');
			}
		}
	},

	updatePost: function (id, title, content) {
		if (Roles.userIsInRole(this.userId, ['admin'])) {

			check([title, content], [String]);

			// Not altering the original author here.
			var data = {
				title: title,
				content: content
			};

			Posts.update(id, {
				$set: data
			}, function (error) {
				if (error) {
					throw new Meteor.Error('updatePost', 'There was an error while updating this post.');
				}
			});
		} else {
			throw new Meteor.Error('unauthorised', 'You are not authorised to update this post.');
		}
	},

	removePost: function (id) {
		if (Roles.userIsInRole(this.userId, ['admin'])) {
			Posts.remove(id, function (error) {
				if (error) {
					throw new Meteor.Error('removePost', 'There was an error while removing this post.');
				}
			});
		} else {
			throw new Meteor.Error('unauthorised', 'You are not authorised to remove this post.');
		}
	}
});*/


// Alternative approach with collection2 and autoform packages.
// This works great for simple apps but does it scale to more complex
// interactions?

// Only allow admin users to do anything to posts.
Posts.allow({
	insert: function (userId, doc) {
		if (Roles.userIsInRole(userId, 'admin')) {
			return true;
		}
	},
	update: function (userId, doc, fieldNames, modifier) {
		if (Roles.userIsInRole(userId, 'admin')) {
			return true;
		}
	},
	remove: function (userId, doc) {
		if (Roles.userIsInRole(userId, 'admin')) {
			return true;
		}
	}
});

// Schema defines the data stored in each record.
var postSchema = new SimpleSchema({
	title: {
		type: String,
		label: 'Title',
		min: 1,
		max: 200
	},
	content: {
		type: String,
		label: 'Content',
		min: 1
	},
	authorId: {
		type: String,
		label: 'Author ID',
		autoValue: function () {
			// Set the current user as the author.
			if (this.isInsert) {
				return this.userId;
			}
		}
	}
});

// Attach the schema to the collection.
Posts.attachSchema(postSchema);
