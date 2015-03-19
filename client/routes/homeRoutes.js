Router.map(function () {
	this.route('home', {
		path: '/'/*,
		waitOn: function () {
			return Meteor.subscribe('people');
		},
		data: function () {
			return {
				people: People.find()
			};
		}*/
	});
});