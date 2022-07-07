require('dotenv').config()
require('colors')
const http = require('http')
const path = require('path')
const { graphqlHTTP } = require("express-graphql");
const { loadSchemaSync } = require("@graphql-tools/load");
const { GraphQLFileLoader } = require("@graphql-tools/graphql-file-loader");
const { addResolversToSchema } = require("@graphql-tools/schema");
const app =require('./api/app');
const connectDB = require('./api/config/db');

//database setup
connectDB()
//server setup
const PORT = process.env.PORT || 5000
const server = http.createServer(app)

const Query = require("./api/GRAPHQL/schema/query");
const Mutation = require("./api/GRAPHQL/schema/mutation");

const schema = loadSchemaSync(path.join(__dirname, "./api/GRAPHQL/schema.graphql"), {
  loaders: [new GraphQLFileLoader()],
});

const resolvers = {
  Query,
  Mutation,
};

const schemaWithResolvers = addResolversToSchema({
  schema,
  resolvers: resolvers,
});
//server listen

//checking node versions
const [major, minor] = process.versions.node.split(".").map(parseFloat);
if (major < 7 || (major === 7 && minor <= 5)) {
  console.log(
    "Please go to nodejs.org and download version 8 or greater. 👌\n "
  );
  process.exit();
}

app.use(
  process.env.GRAPHQL_URL,
  graphqlHTTP((request, response, graphQLParams) => ({
    schema: schemaWithResolvers,
    rootValue: resolvers,
    graphiql: true,
    context: {
      request,
      response,
      graphQLParams
    },
  }))
);

server.listen(PORT,()=>{
    console.log(`server is listening on http://localhost:${PORT} - for REST`.green.bold)
    console.log(`server is listening on http://localhost:${PORT}${process.env.GRAPHQL_URL} - for REST`.green.bold)
})

module.exports = app;
