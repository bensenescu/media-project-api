'use strict'

const express = require('express');
const sls = require('serverless-http');
const app = express();

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

// import baseRouter
//const baseRouter = require('./routes/baseRouter');
module.exports.getAllMedia = async (event, context, callback) => {
    const params = {
        TableName: 'Media'
    }
    
    try {
        const res = await dynamoDb.scan(params).promise();
        callback(null, res);
    } catch (error) {
        callback(error, null);  
    }
};

//app.use('/api', baseRouter);

//app.listen(3000, () => console.log(`Listening on: 3000`));
module.exports.server = sls(app);