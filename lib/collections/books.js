Books = new Mongo.Collection('books');

Books.allow({
  insert:function(userId, doc) {
    return !! userId; // Must be logged in to add.
  }
})
