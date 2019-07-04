const { gql } = require("apollo-server");

const authors = [
  {
    id: 1,
    name: "J.K. Rowling",
    age: 53,
    books: [
      {
        title: "Harry Potter and the Sorcerer's Stone",
        year: 1997
      },
      {
        title: "Fantastic Beasts and where to Find Them",
        year: 2001
      },
      {
        title: "Lethal White",
        year: 2018
      },
      {
        title: "The Casual Vacancy",
        year: 2012
      },
      {
        title: "The Silkworm",
        year: 2014
      }
    ]
  },
  {
    id: 2,
    name: "Michael Crichton",
    age: 65,
    books: [
      {
        title: "The Andromeda Strain",
        year: 1969
      },
      {
        title: "State of Fear",
        year: 2004
      },
      {
        title: "Prey",
        year: 2002
      },
      {
        title: "Timeline",
        year: 1999
      },
      {
        title: "Sphere",
        year: 1987
      }
    ]
  }
];

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  # This extends type Book that is already in the schema
  extend type Book {
    year: Int
  }

  # This "Author" type can be used in other type declarations.
  type Author {
    id: ID
    name: String
    age: Int
    books: [Book]
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  extend type Query {
    authors: [Author]
    author(id: ID!): Author
  }
`;

const resolvers = {
  Query: {
    authors: () => authors,
    author: (_, args) => authors.find(author => author.id == args.id)
  }
};

module.exports = {
  typeDefs,
  resolvers
};
