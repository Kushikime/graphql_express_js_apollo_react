const express = require("express");
const { createHandler } = require("graphql-http");
const schema = require("./schemas/schema");

const app = express();

app.all(
  "/graphql",
  createHandler({
    schema,
  })
);

app.listen(4000, () => console.log("Listening on http://localhost:4000"));
