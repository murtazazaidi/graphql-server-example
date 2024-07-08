const db = {
  books: [
    { id: "1", title: "Perfect Sun", author_id: "1" },
    { id: "2", title: "Perfect Moon", author_id: "1" },
    { id: "3", title: "Perfect Stars", author_id: "1" },
    { id: "4", title: "Rising Debt", author_id: "2" },
    { id: "5", title: "Introduction to Economics", author_id: "2" },
    { id: "6", title: "Romeo & Juliet", author_id: "3" },
  ],
  authors: [
    { id: "1", name: "Robert Napolean" },
    { id: "2", name: "Henry Kyle" },
    { id: "3", name: "Willian Shakespeare" },
  ],
  reviews: [
    { id: "1", rating: 5, book_id: "1" },
    { id: "2", rating: 3.5, book_id: "1" },
    { id: "3", rating: 3, book_id: "1" },
    { id: "4", rating: 2.5, book_id: "1" },
    { id: "5", rating: 4, book_id: "1" },
    { id: "6", rating: 3, book_id: "2" },
    { id: "7", rating: 2.5, book_id: "2" },
    { id: "8", rating: 3, book_id: "2" },
    { id: "9", rating: 1.5, book_id: "2" },
    { id: "10", rating: 1, book_id: "2" },
    { id: "11", rating: 3, book_id: "3" },
    { id: "12", rating: 4, book_id: "3" },
  ],
};

module.exports = db;
