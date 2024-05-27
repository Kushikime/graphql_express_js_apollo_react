const graphql = require("graphql");
const _ = require("lodash");

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

// Dummy data
let books = [
  { name: "Test book 1", genre: "Test genre 1", id: "1" },
  { name: "Test book 2", genre: "Test genre 2", id: "2" },
  { name: "Test book 3", genre: "Test genre 3", id: "3" },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: [],
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        console.log("here");
        return _.find(books, { id: args.id });
      },
    },
    books: {
      type: BookType,
      resolve(parent) {
        return books;
      },
    },
  },
});

// Export the schema object directly
module.exports = new GraphQLSchema({
  query: RootQuery,
});
