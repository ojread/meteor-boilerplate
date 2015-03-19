AutoForm.addHooks('insertPost', {
    onSuccess: function(operation, result, template) {
        // After inserting the post, view it.
        Router.go('postSingle', {_id: result});
    }
});
