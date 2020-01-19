'use strict'

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const uuid = require('uuid');

let mediaController;

mediaController.getAllMedia = async (event, context, callback) => {
    const params = {
        TableName: 'Media'
    }
    
    try {
        const res = await dynamoDb.get(params).promise();
        callback(null, res);
    } catch (error) {
        callback(error, null);  
    }  
};

export default mediaController;