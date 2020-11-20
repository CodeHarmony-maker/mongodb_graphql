import express from "express";
import bodyParser from "body-parser";
const { graphqlHTTP } = require("express-graphql");
import cors from "cors";
const app = express();
app.use(cors(), bodyParser.json());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: {},
    rootValue: {},
    graphiql: true,
  })
);
function main() {
  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`Server is listening on port: ${port}`));
}
main();