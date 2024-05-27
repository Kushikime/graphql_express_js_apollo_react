const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const BookType = new GraphQLObjectType({
  name: "book",
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    genre: {
      type: GraphQLString,
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    book: {
      type: BookType,
      args: {
        id: {
          type: GraphQLString,
        },
      },
      resolve(parent, args) {
        console.log("Book id is: ", args.id);
        // code to get data from DB or any other source
      },
    },
  }),
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
