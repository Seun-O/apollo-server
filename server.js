const { ApolloServer } = require("apollo-server");

const server = new ApolloServer({
  modules: [
    require("./modules/books"),
    require("./modules/authors"),
    require("./modules/cats"),
    require("./modules/products")
  ]
});

module.exports = server;
