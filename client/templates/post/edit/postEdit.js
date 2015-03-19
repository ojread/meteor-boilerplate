// AutoForm.hooks({
// 	updatePost: {
// 		onSubmit: function () {
//
// 		}
// 	}
// });

/*Template.postEdit.events({
	'submit #postEditForm': function (event) {
		// Stop the form from submitting normally.
		event.preventDefault();

		// Get the field values from the event.
		var data = {
			title: event.target.postTitle.value,
			content: event.target.postContent.value
		};

		// Are we updating an existing record?
		// This is how we insert and update with the same template.
		if (this.post) {
			var id = this.post._id;
			Meteor.call('updatePost', id, data, function (error) {
				if (error) {
					Alerts.add(error.reason);
				} else {
					// View the updated record.
					Router.go('postSingle', {
						_id: id
					});
				}
			});
		} else {
			// Insert a new record.
			Meteor.call('insertPost', data, function (error, id) {
				if (error) {
					Alerts.add(error.reason);
				} else {
					// View the inserted record.
					Router.go('postSingle', {
						_id: id
					});
				}
			});
		}
	}
});*/
