Template.userIndexItem.helpers({
	roleSelected: function (role) {
		if (this.roles) {
			if (this.roles[0]) {
				if (this.roles[0] === role) {
					return 'selected';
				}
			}
		}
	}
});

Template.userIndexItem.events({
	'change select.userRole': function (e) {
		var role = $(e.target).val();
		Meteor.call('setUserRoles', this._id, [role]);
	}
});