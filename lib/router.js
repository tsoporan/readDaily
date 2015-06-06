Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    return Meteor.subscribe('books');
  }
});

Router.route('/', {
  name: 'booksList'
})

Router.route('/:slug', {
  name: 'book',
  data: function() {
    return Books.findOne({ slug: this.params.slug});
  }
});
