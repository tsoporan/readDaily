// readDaily client-side code.

Meteor.subscribe('books');

Template.layout.helpers({
  year: function() {
    return new Date().getFullYear();
  }
});

Template.booksList.helpers({
  books : function() {
    return Books.find();
  }
});
