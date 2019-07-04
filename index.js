const PORT = process.env.PORT || 3300;
const server = require("./server");

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
