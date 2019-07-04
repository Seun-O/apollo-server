const { gql } = require("apollo-server");

const products = [
  { id: 1, name: "Red Bike", price: 12.99, type: "Bike" },
  { id: 2, name: "DJI Mavic Pro", price: 799.99, type: "Drone" },
  { id: 3, name: "NZXT Full Rig ", price: 1500.5, type: "PC" },
  { id: 4, name: "Sony A7R III", price: 2850, type: "Camera" }
];

const typeDefs = gql`
  type Product {
    id: ID
    name: String
    price: Float
    type: String
  }

  input NewProductInput {
    id: ID!
    name: String!
    price: Float!
    type: String!
  }

  extend type Query {
    product(id: ID): Product
    products: [Product]
  }
  extend type Mutation {
    newProduct(input: NewProductInput!): Product!
  }
`;

const resolvers = {
  Query: {
    product: (_, args) => products.find(p => p.id == args.id),
    products: () => products
  },
  Mutation: {
    newProduct: (_, args) => {
      const newP = args;
      newP.save();
    }
  }
};

module.exports = {
  typeDefs,
  resolvers
};
