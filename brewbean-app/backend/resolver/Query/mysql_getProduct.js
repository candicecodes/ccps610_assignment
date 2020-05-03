var secret = require('../../secret');
var common = require('../Common/mysql');
const Client = require('serverless-mysql');


exports.func = async (_, { idProduct }) => {
    var client = Client({
        config: {
            host: secret['host'],
            database: secret['dbInstanceIdentifier'],
            user: secret['username'],
            password: secret['password']
        }
    })
    await common.init(client)
    var resp = await common.getProduct(client, idProduct);
    client.quit()
    return resp;
}