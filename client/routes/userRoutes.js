Router.map(function () {

	this.route('userIndex', {
		path: '/users',
		waitOn: function () {
			return Meteor.subscribe('users');
		},
		data: function () {
			return {
				users: Meteor.users.find()
			};
		}
	});

	/*this.route('userSingle', {
		path: '/users/:_id',
		waitOn: function () {
			return Meteor.subscribe('user', this.params._id);
		},
		data: function () {
			return Meteor.users.findOne(this.params._id);
		}
	});*/

});