// Version with promises
// webpack.config.js

const webpack = require('webpack')
const slsw = require('serverless-webpack');
const BbPromise = require('bluebird');
const path = require('path');


module.exports = BbPromise.try(() => {
    return slsw.lib.serverless.providers.aws.getAccountId()
    .then(accountId => ({
        entry: slsw.lib.entries,
        target: 'node',
        plugins: [
            new webpack.DefinePlugin({
                AWS_ACCOUNT_ID: `${accountId}`,
            }),
        ],
        module: {
            
        }
    }));
});

// module.exports = {
//     module: {
//         rules: [
//             {
//                 test: /\.(graphql|gql)$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'gql-loader',
//                     options: {
//                     baseDir: path.resolve(`${__dirname}`)
//     }
//   }
//             }
//         ]
//     }
// }