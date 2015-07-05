// readDaily client-side code.

Template.layout.helpers({
  year: function() {
    return new Date().getFullYear();
  }
});


Template.booksList.events({
  'click .completed-books' : function(e) {
    e.preventDefault();
    return Router.go('booksCompleted');
  },

  'click .add-book': function(e) {
    e.preventDefault();
    return Router.go('booksCreate');
  }
});

Template.booksCompleted.events({
  'click .active-books': function(e) {
    e.preventDefault();
    return Router.go('booksList');
  }
})

Template.booksCreate.events({
  'submit form' : function(e) {

    e.preventDefault();

    var book = {
      title : $(e.target).find('[name=title]').val(),
      author : $(e.target).find('[name=author]').val(),
      pages: $(e.target).find('[name=pages]').val(),
      userId: Meteor.userId(),
    };

    Meteor.call('addBook', book, function(err, result) {
      if (err) {
        return alert(err.reason);
      }

      Router.go('book', { slug: result.slug });

    });

  },

  'click button[name=cancel]' : function(e) {
    e.preventDefault();
    Router.go('booksList');
  }
})
