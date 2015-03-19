// The Meteor.user collection is built-in but define interactions with it as
// Meteor methods.

Meteor.methods({
	'setUserRoles': function (userId, roles) {
		// Check the calling user is admin.
		if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {
			if (Meteor.userId() !== userId) {
				Roles.setUserRoles(userId, roles);
			}
		}
	}
});
