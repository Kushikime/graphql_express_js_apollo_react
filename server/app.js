const express = require("express");
const { createHandler } = require("graphql-http/lib/use/express");
const schema = require("./schemas/schema");
const cors = require("cors");
const { ruruHTML } = require("ruru/server");
const bodyParser = require("body-parser");

const url = `http://localhost:4000`;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.all("/graphql", createHandler({ schema }));

app.get("/", (_req, res) => {
  res.type("html");
  res.end(ruruHTML({ endpoint: "/graphql" }));
});

app.listen(4000, () => console.log(`Listening on ${url}`));
