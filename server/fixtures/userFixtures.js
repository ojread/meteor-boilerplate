/*
Create default users with roles. This way you can always have an admin account
on newly deployed apps.	Make sure to change the passwords when live!
*/

// Run whenever the app starts.
Meteor.startup(function () {

	// Array of admin users that you want to always exist.
	var users = [
		{
			username: 'admin',
			email: 'admin@admin.com',
			password: 'admin',
			roles: ['admin']
		}
	];

	// Step through the users array.
	for (var i=0; i<users.length; i++) {
		var user = users[i];
		// Does this user exist?
		if (Meteor.users.find({username: user.username}).count() < 1) {
			// Create the user account.
			var id = Accounts.createUser(user);
			Roles.addUsersToRoles(id, user.roles);
			console.log('Created user', user.username);
		}
	}

});
