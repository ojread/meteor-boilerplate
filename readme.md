# Meteor Boilerplate

This is a bare-bones Meteor app that demonstrates a logical structure and shows
some very useful packages. This project is a good base for rapid prototyping.

After cloning this repo, run `meteor install` to install the correct packages.


## Directory Structure

* client - only available to the client
	* config - set up things like accounts UI and router
	* routes - define routes to connect paths and data to templates
	* templates - HTML templates and JS event handlers
		* common - Layout and header templates
		* home - home page template
		* post - example CRUD interface
			* edit - update a post
			* index - list all posts
			* new - create a new post
			* single - view a post in detail
		* user - manage Meteor's user collection
			* index - admin page for setting roles
* collections - available globally
* server - only available to the server
	* fixtures - insert default records on server start
	* publications - make record sets available to the client
