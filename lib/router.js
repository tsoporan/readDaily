Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notfound',
  waitOn: function() {
    return Meteor.subscribe('books');
  }
});

Router.route('/', {
  name: 'booksList'
})

Router.route('/books', function() {
  this.redirect('/');
});

Router.route('/books/create', {
  name: 'booksCreate',
});

Router.route('/books/:slug', {
  name: 'book',
  data: function() {
    return Books.findOne({ slug: this.params.slug});
  }
});

Router.onBeforeAction('dataNotFound', {
  only: 'book'
});
