const { gql } = require("apollo-server");

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: Author!
    reviews: [Review]!
    averageRating: Float!
  }

  type Author {
    id: ID!
    name: String!
    books: [Book]!
  }

  type Review {
    id: ID!
    book: Book!
    rating: Float!
    title: String!
    description: String
  }

  type Query {
    books: [Book]!
    book(id: ID!): Book
    authors: [Author]!
    author(id: ID!): Author
    reviews: [Review]!
    review(id: ID!): Review
  }

  type Mutation {
    addBook(book: AddBookInput): Book
    updateBook(id: ID!, edits: UpdateBookInput): Book
    deleteBook(id: ID!): [Book]!

    addAuthor(author: AddAuthorInput): Author
    updateAuthor(id: ID!, edits: UpdateAuthorInput!): Author
    deleteAuthor(id: ID!): [Author]!

    addReview(review: AddReviewInput): Review
    updateReview(id: ID!, edits: UpdateReviewInput!): Review
    deleteReview(id: ID!): [Review]!
  }

  input AddBookInput {
    title: String!
    author_id: ID!
  }

  input UpdateBookInput {
    title: String
    author_id: ID
  }

  input AddAuthorInput {
    name: String!
  }

  input UpdateAuthorInput {
    name: String
  }

  input AddReviewInput {
    book_id: ID!
    rating: Float!
    title: String!
    description: String
  }

  input UpdateReviewInput {
    rating: Float
    title: String
    description: String
  }
`;

module.exports = typeDefs;
