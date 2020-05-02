// need the server later on


const { GraphQLServerLambda } = require("graphql-yoga");
var fs = require("fs");
const { readFileSync } = require("fs");
const glob = require("glob");

const path = require('path');
const { importSchema } = require('graphql-import');
// import schema from './schema.gql';
const secretManager = require('./secret');

// const testing = dirname('__dirname');
// const testing = process.cwd();

// const testFolder = process.cwd();

// const testing = fs.readdir(testFolder, (err, files) => {
//     files.forEach(file => {
//         return file;
//     });
// });



module.exports.hello = (event, context, callback) => {
    secretManager.secretManager("database-1-masterpassword");
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Seerverless! your function executed successfully and where is my file?',
            input: event,
        }),
    };
    callback(null, response);
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



// const typeDefs = fs.readFileSync("./schema.gql").toString('utf-8');
// const typeDefs = fs.readFileSync(schema).toString('utf-8');

// const typeDefs = fs.readFileSync(path.join("./", "schema.graphql", toString("utf8")));
// const typeDefs = importSchema('brew-app/backend/schema.gql');
// const typeDefs = [fs.readFileSync(path.join(__dirname, "/c/Users/16472/Desktop/sites/ryerson/ccps610/ccps610_assignment/brewbean-app/backend/schema.gql"), "utf8")];
// const typeDefs = [fs.readFileSync(path.join(__dirname, "/schema.gql"), "utf8")];


const resolvers = {
    Query: {
        mysql_getProduct: require("./resolver/Query/mysql_getProduct").func
    },
    Mutation: {
        mysql_createProduct: require("./resolver/Mutation/mysql_createProduct").func
    }
};

const lambda = new GraphQLServerLambda({
    // typeDefs,
    resolvers
});

exports.server = lambda.graphqlHandler;
exports.playground = lambda.playgroundHandler;

