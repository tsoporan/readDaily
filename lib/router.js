Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notfound',
  waitOn: function() {
    return Meteor.subscribe('books');
  }
});


Router.route('/books', function() {
  this.redirect('/');
});

Router.route('/books/create', {
  name: 'booksCreate',
});

Router.route('/books/:slug', {
  name: 'book',
  data: function() {
    return Books.findOne({ slug: this.params.slug, userId: Meteor.userId() })
  }
});

Router.route('/', {
  name: 'booksList',
  onBeforeAction: function() {
    if (!Meteor.user()) {
      this.render('intro');
    } else {
      this.next();
    }
  },

  data: function() {
    return {
      books: Books.find({ userId: Meteor.userId() })
    }
  },

});


var requiresLogin = function() {
  if (!Meteor.user()) {
    this.render('notfound');
  } else {
    this.next();
  }
};

Router.onBeforeAction('dataNotFound', {
  only: 'book'
});

Router.onBeforeAction(requiresLogin, {
  only: 'booksCreate'
});
