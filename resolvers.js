const db = require("./datasource");
const {
  generateId,
  findById,
  filterWithId,
  filterWithoutId,
} = require("./utils");

const resolvers = {
  Book: {
    author: (parent) => {
      return findById(db.authors, parent.author_id);
    },
  },
  Author: {
    books: (parent) => {
      return db.books.filter((book) => book.author_id === parent.id);
    },
  },
  Review: {
    book: (parent) => {
      return findById(db.books, parent.book_id);
    },
  },
  Query: {
    books: () => db.books,
    book: (_, args) => {
      const existingBook = findById(db.books, args.id);
      if (!existingBook) throw new Error(`Book ${args.id} not found`);

      return existingBook;
    },
    authors: () => db.authors,
    author: (_, args) => {
      const existingAuthor = findById(db.authors, args.id);
      if (!existingAuthor) throw new Error(`Author ${args.id} not found`);

      return existingAuthor;
    },
    reviews: () => db.reviews,
    review: (_, args) => {
      const existingReview = findById(db.reviews, args.id);
      if (!existingReview) throw new Error(`Review ${args.id} not found`);

      return existingReview;
    },
  },
  Mutation: {
    addBook: (_, args) => {
      const { title, author_id } = args.book;

      const author = findById(db.authors, author_id);
      if (!author) {
        throw new Error(`Author with id ${author_id} not found`);
      }

      const newBook = { id: generateId(), title, author_id };
      db.books.push(newBook);
      return newBook;
    },

    deleteBook: (_, args) => {
      const { id } = args;
      const existingBook = findById(db.books, id);
      if (!existingBook)
        throw new Error(`Invalid Request - Missing Book against ID: ${id}`);

      db.books = filterWithoutId(db.books, id);

      return db.books;
    },

    updateBook: (_, args) => {
      const { id, edits } = args;

      const existingBook = findById(db.books, id);
      if (!existingBook)
        throw new Error(`Invalid Request - Missing Book against ID: ${id}`);

      let updatedBook;
      db.books = db.books.map((currentBook) => {
        if (currentBook.id === id) {
          updatedBook = {
            ...currentBook,
            ...edits,
          };
          return updatedBook;
        }

        return currentBook;
      });

      return updatedBook;
    },

    addAuthor: (_, args) => {
      const { name } = args.author;
      const newAuthor = { id: generateId(), name };
      db.authors.push(newAuthor);
      return newAuthor;
    },

    deleteAuthor: (_, args) => {
      const { id } = args;
      const existingAuthor = findById(db.authors, id);
      if (!existingAuthor)
        throw new Error(`Invalid Request - Missing Author against ID: ${id}`);

      db.authors = filterWithoutId(db.authors, id);

      return db.authors;
    },

    updateAuthor: (_, args) => {
      const { id, edits } = args;
      const existingAuthor = findById(db.authors, id);
      if (!existingAuthor)
        throw new Error(`Invalid Request - Missing Author against ID: ${id}`);

      let updatedAuthor;
      db.authors = db.authors.map((currentAuthor) => {
        if (currentAuthor.id === id) {
          updatedAuthor = {
            ...currentAuthor,
            ...edits,
          };
          return updatedAuthor;
        }

        return currentAuthor;
      });

      return updatedAuthor;
    },

    addReview: (_, args) => {
      const { book_id, rating } = args.review;

      const book = findById(db.books, book_id);
      if (!book) {
        throw new Error(`Book with id ${book_id} not found`);
      }

      const newReview = { id: generateId(), book_id, rating };
      db.reviews.push(newReview);
      return newReview;
    },

    deleteReview: (_, args) => {
      const { id } = args;
      const existingReview = findById(db.reviews, id);
      if (!existingReview)
        throw new Error(`Invalid Request - Missing Review against ID: ${id}`);

      db.reviews = filterWithoutId(db.reviews, id);

      return db.reviews;
    },

    updateReview: (_, args) => {
      const { id, edits } = args;
      const existingReview = findById(db.reviews, id);
      if (!existingReview)
        throw new Error(`Invalid Request - Missing Review against ID: ${id}`);

      let updatedReview;
      db.reviews = db.reviews.map((currentReview) => {
        if (currentReview.id === id) {
          updatedReview = {
            ...currentReview,
            ...edits,
          };
          return updatedReview;
        }

        return currentReview;
      });

      return updatedReview;
    },
  },
};

module.exports = resolvers;
