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

    var title = $(e.target).find('[name=title]').val();
 

    var book = {
      createdAt: new Date(),
      title : title,
      author : $(e.target).find('[name=author]').val(),
      pages: $(e.target).find('[name=pages]').val(),
      slug : s.slugify(title),
    };

    book._id = Books.insert(book);

    Router.go('book', book);

  },
})
