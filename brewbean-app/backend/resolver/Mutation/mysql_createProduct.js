// const uuidv4 = require('uuid/v4');
var common = require('../Common/mysql')
const Client = require('serverless-mysql')

exports.func = async (_, obj) => {
    var client = Client({
        config: {
            host: process.env.MYSQL_HOST,
            database: process.env.DB_NAME,
            user: process.env.USERNAME,
            password: process.env.PASSWORD
        }
    })
    await common.init(client)
    // The connection is established at this point - create the user.
    var productid = NULL;
    let product = await client.query('INSERT INTO bb_product (productName, Description, ProductImage, Price, Active) VALUES(?,?,?,?,?)', [obj.input.productName, obj.input.description, obj.input.productimage, obj.input.price, obj.input.active]);
        // And now create the user's posts.
    // for (let index = 0; index < obj.input.Posts.length; index++) {
    //     const element = obj.input.Posts[index];
    //     await client.query('INSERT INTO posts (uuid, text, user_id) VALUES(?, ?, ?)',
    //         [uuidv4(), element.Text, user.insertId]);
    // }
    // Return the User model that we have already defined
    // in the Common namespace.
    var resp = await common.getProduct(client, idProduct);
    // Close the connection.
    client.quit()
    return resp;
}