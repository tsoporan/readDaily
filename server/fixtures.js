// Pre-load some books.

if (Books.find().count() === 0) {

  var books = [
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      pages : 324,
      createdAt: new Date()
    },
    {
      title: '1984',
      author: 'George Orwell',
      pages: 326,
      createdAt: new Date()
    },
    {
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      pages: 277,
      createdAt: new Date()
    },
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      pages: 180,
      createdAt: new Date()
    },
    {
      title: 'Animal Farm',
      author: 'George Orwell',
      pages: 152,
      createdAt: new Date()
    },
    {
      title: 'The Little Prince',
      author: 'Antoine de Saint-Exupery',
      pages: 98,
      createdAt: new Date()
    },
    {
      title: 'Faranheit 451',
      author: 'Ray Bradbury',
      pages: 277,
      createdAt: new Date()
    },
    {
      title: 'The Hobbit',
      author: 'J.R.R Tolkien',
      pages: 366,
      createdAt: new Date()
    },
  ];

  _.each(books, function(b) {
    Books.insert({
      title: b.title,
      author: b.author,
      pages: b.pages,
      createdAt: b.createdAt
    });
  });

}
