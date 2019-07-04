const { gql } = require("apollo-server");

const books = [
  {
    id: 1,
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling"
  },
  {
    id: 2,
    title: "Jurassic Park",
    author: "Michael Crichton"
  }
];

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  # This "Book" type can be used in other type declarations.
  type Book {
    id: ID
    title: String
    author: String
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  extend type Query {
    books: [Book]
    book(id: ID!): Book
  }
`;

const resolvers = {
  Query: {
    books: () => books,
    book: (_, args) => books.find(book => book.id == args.id)
  }
};

module.exports = {
  typeDefs,
  resolvers
};
