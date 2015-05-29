// readDaily client-side code.

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
