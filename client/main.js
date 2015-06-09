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

Template.booksCreate.events({
  'submit form' : function(e) {

    e.preventDefault();

    var book = {
      title : $(e.target).find('[name=title]').val(),
      author : $(e.target).find('[name=author]').val(),
      pages: $(e.target).find('[name=pages]').val(),
    };

    Meteor.call('addBook', book, function(err, result) {
      if (err) {
        return alert(err.reason);
      }

      Router.go('book', { slug: result.slug });

    });

  },
})
