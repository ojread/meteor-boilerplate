// Publish user data to admin users only.

Meteor.publish('users', function () {
	if (Roles.userIsInRole(this.userId, 'admin')) {
		return Meteor.users.find();
	}
});

Meteor.publish('user', function (id) {
	if (Roles.userIsInRole(this.userId, 'admin')) {
		return Meteor.users.find(id);
	}
});
