Router.configure({
  layoutTemplate: 'layout',
  waitOn: function() {
    return Meteor.subscribe('books');
  }
});

Router.route('/', {
  name: 'booksList'
})

Router.route('/:_id', {
  name: 'bookItem'
});
