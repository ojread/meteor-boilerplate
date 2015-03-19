// Set basic router templates.
Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound'
});

// Tell it to wait for data to be ready.
Router.onBeforeAction('loading');

// Remove viewed alerts when loading a new page.
Router.before(function () {
	Alerts.removeSeen();
	this.next();
});
