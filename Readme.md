# GraphQL Server 
----------------

### Packages used
-----------------
This server was created using Apollo-Server and GraphQL

`npm i apollo-server graphql`

### Starting the Server

Use `npm start` to start the server with node

Use `npm run server` to start the server with nodemon


### About this repository

This repo test modularizing and creating a GraphQL server using SDL (Schema Definition Language)

##### Example

```
type Animal {
    id: ID! //GraphQL ObjectID ! denotes required
    name: String!
    species: String!
    age: Int! //GraphQLInt
    food: [String] //GraphQLList - an Array of GrqphlQLString
}
```