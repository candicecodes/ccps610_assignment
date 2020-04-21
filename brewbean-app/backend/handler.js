// need the server later on


const { GraphQLServerLambda } = require("graphql-yoga");
var fs = require("fs");
const { readFileSync } = require("fs");

// const path = require('path');

const secretManager = require('./secret');

module.exports.hello = (event, context, callback) => {

    secretManager.secretManager("database-1-masterpassword");
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Seerverless! your function executed successfully',
            input: event,
        }),
    }
};

const manageFile = require('./manageFile');

module.exports.appendText = (event, context, callback) => {

    manageFile.appendText(text).then(result => {
        const response = {
            statusCode: 200,
            body: JSON.stringify({
                result
            })
        };

    callback(null, response);
    });
};



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

