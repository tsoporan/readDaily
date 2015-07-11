Books = new Mongo.Collection('books');

Books.allow({
  insert:function(userId, doc) {
    return !! userId; // Must be logged in to add.
  }
});

Meteor.methods({
  addBook : function(bookProps){
    check(Meteor.userId(), String);
    check(bookProps, {
      title: String,
      pages: String,
    });

    var book = _.extend(bookProps, {
      userId: Meteor.userId(),
      createdAt : new Date(),
      slug : s.slugify(bookProps.title)
    });

    var bookId = Books.insert(book);

    return {
      slug : book.slug
    };
  }
})
