const { gql } = require("apollo-server");

const typeDefs = gql`
  type Cat {
    name: String
    age: Int
    owner: Owner
  }
  type Owner {
    name: String
    age: Int
    cat: Cat
  }

  extend type Query {
    cat(name: String): Cat
    owner(name: String): Owner
  }
`;
const resolvers = {
  Query: {
    cat(_, args) {
      console.log(`cat resolver`);
      return {};
    },
    owner(_, args) {
      console.log(`owner resolver`);
      return {};
    }
  },
  Cat: {
    name() {
      return "Timmy";
    },
    age() {
      return 2;
    },
    owner() {
      return {};
    }
  },
  Owner: {
    name() {
      return "Seun";
    },
    age() {
      return 25;
    },
    cat() {
      return {};
    }
  }
};

module.exports = {
  typeDefs,
  resolvers
};
