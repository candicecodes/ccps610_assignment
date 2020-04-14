// need the server later on

const { GraphQLServerLambda } = require("graphql-yoga");
var fs = require("fs")

const typeDefs = fs.readFileSync("./schema.gql").toString('utf-8');

const resolvers = {
    Query: {
        mysql_getProduct: require("./resolver/Query/mysql_getProduct").func
    },
    Mutation: {
        mysql_createProduct: require("./resolver/Mutation/mysql_createProduct").func
    }
};

const lambda = new GraphQLServerLambda({
    typeDefs,
    resolvers
});

exports.server = lambda.graphqlHandler;
exports.playground = lambda.playgroundHandler;