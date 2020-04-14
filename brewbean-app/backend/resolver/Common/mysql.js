exports.init = async (client) => {
    await client.query(`
    CREATE TABLE IF NOT EXISTS bb_product
    (
        idProduct TINYINT UNSIGNED not null AUTO_INCREMENT, 
        productName varchar(25) ,
        Description varchar(100) ,
        ProductImage varchar(25),
        Price decimal(6,2),
        SaleStart datetime,
        SaleEnd datetime,
        SalePrice decimal(6,2),
        Active tinyint,
        Featured tinyint,
        FeatureStart datetime,
        FeatureEnd datetime,
        Type char(1),
        idDepartment tinyint,
        stock DECIMAL(5,1),
        ordered SMALLINT(3),
        reorder SMALLINT(3),
        CONSTRAINT prod_id_pk PRIMARY KEY(idProduct),
        CONSTRAINT prod_idDept_fk FOREIGN KEY (idDepartment)
        REFERENCES BB_Department (idDepartment)
    
    );  
    `)
    await client.query(`
    CREATE TABLE IF NOT EXISTS bb_department
    (
        idDepartment tinyint,
	    DeptName varchar(25),
        DeptDesc varchar(100),
        DeptImage varchar(25),
        CONSTRAINT dept_id_pk2 PRIMARY KEY(idDepartment) 
    );  
    `)
}

exports.getProduct = async (client, idProduct) => {
    var product = {};
    var productFromDb = await client.query(`select idProduct, productName, prodDescription, prodImage, price, saleStart, saleEnd, salePrice, active, featured, featureStart, featureend, producttype, iddepartment, stock, ordered, reorder from products where idProduct = ?`, [idProduct])
    if (productFromDb.length == 0) {
        return null;
    }
    // var postsFromDb = await client.query(`select uuid, text from posts where user_id = ?`, [userFromDb[0].id])

    // user.UUID = userFromDb[0].uuid;
    // user.Name = userFromDb[0].name;

    // if (postsFromDb.length > 0) {
    //     user.Posts = postsFromDb.map(function (x) { return { UUID: x.uuid, Text: x.text } });
    // }
    return user;
}