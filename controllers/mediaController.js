const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();
// const uuid = require('uuid');

const getAllMedia = async (event, context, callback) => {
  const params = {
    TableName: 'Media',
  };

  try {
    const res = await dynamoDb.scan(params).promise();
    callback(null, res);
  } catch (error) {
    callback(error, null);
  }
};

const createMedia = (req, res) => {
  res.send('createMedia');
};

const getMedia = (req, res) => {
  res.send('getMedia');
};

const updateMedia = (req, res) => {
  res.send('updateMedia');
};

const deleteMedia = (req, res) => {
  res.send('deleteMedia');
};

module.exports = {
  getAllMedia,
  createMedia,
  getMedia,
  updateMedia,
  deleteMedia,
};
