

const AWS = require('aws-sdk');
const S3 = new AWS.S3();

const BUCKET = 'brewbean-operations-bucket';
const OBJECTKEY = 'file.txt';

module.exports.appendText = text => {
    //get the file
    // append text to the file
    // save the object back into the bucket
    // get the public url of the file
    return getS3Obejct(BUCKET, OBJECTKEY)
        .then(data => appendText(data.Body, text))
        .then(buffer => putS3Object(BUCKET, OBJECTKEY, buffer))
        .then(() => getSignedUrl(BUCKET, OBJECTKEY));
};


function getS3Object(bucket, key) {
    // this is calling the AWS SDK getObject
    return S3.getObject({
        Bucket: bucket,
        Key: key,
        ResponseContentType: 'text/plain'
    })
    .promise()
    .then(file => {
        return file;
    })
    .catch(error => {
        // if this is the first call and there is no file
        // file not found
        return putS3Object (bucket, key, '');
    });
}


function appendText(data, text) {
    // at first, there will be nothing in the buffer so it will be undefined
    if (data === undefined) {
        return text;
    }
    // return the buffer transformed into a string
    return data.toString('ascii') + '\n' + text;
}


function putS3Object(bucket, key, body) {
    return S3.putObject({
        Body: body,
        Bucket: bucket,
        ContentType: 'text/plain',
        Key: key
    })
    .promise();
}


function getSignedUrl(bucket, key) {
    const params = { Bucket: bucket, Key: key };
    return S3.getSignedUrl('getObject', params);
}

