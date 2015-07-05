// Create some defaul users.

var tmpUserId1, tmpUserId2;

if (Meteor.users.find().count() === 0) {
  tmpUserId1 =  Accounts.createUser({
    username : 'a@a.aa',
    email: 'a@a.aa',
    password: '123456',
  });

  tmpUserId2 = Accounts.createUser({
    username: 'b@b.bb',
    email: 'b@b.bb',
    password: '123456',
  })
}

// Pre-load some books.


if (Books.find().count() === 0) {

  var books = [
    {
      title: 'To Kill a Mockingbird',
      pages : 324,
      createdAt: new Date(),
      user : tmpUserId2,
    },
    {
      title: '1984',
      pages: 326,
      createdAt: new Date(),
      user : tmpUserId1,
    },
    {
      title: 'The Catcher in the Rye',
      pages: 277,
      createdAt: new Date(),
      user : tmpUserId2,
    },
    {
      title: 'The Great Gatsby',
      pages: 180,
      createdAt: new Date(),
      user : tmpUserId2,
    },
    {
      title: 'Animal Farm',
      pages: 152,
      createdAt: new Date(),
      user : tmpUserId1,
    },
    {
      title: 'The Little Prince',
      pages: 98,
      createdAt: new Date(),
      user : tmpUserId2,
    },
    {
      title: 'Faranheit 451',
      pages: 277,
      createdAt: new Date(),
      user : tmpUserId1,
    },
    {
      title: 'The Hobbit',
      pages: 366,
      createdAt: new Date(),
      user : tmpUserId2,
    },
  ];

  _.each(books, function(b) {
    Books.insert({
      title: b.title,
      pages: b.pages,
      createdAt: b.createdAt,
      slug: s.slugify(b.title),
      userId : b.user
    });
  });

}
