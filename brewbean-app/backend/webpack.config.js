// Version with promises
// webpack.config.js

const webpack = require('webpack')
const slsw = require('serverless-webpack');
const BbPromise = require('bluebird');

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
            // 
            // GOTTA DO SOMETHING WITH LOADERS HERE TOMORROW
        }
    }));
});