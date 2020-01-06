const AWS = require('aws-sdk');
const uuidv1 = require('uuid/v1');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

const TableName = 'MediaTable';

const getAllMedia = async (req, res) => {
  const params = {
    TableName,
  };

  try {
    const { Items } = await dynamoDb.scan(params).promise();
    res.send(Items);
  } catch (error) {
    res.send({ error });
  }
};

const createMedia = async (req, res) => {
  const item = req.body;
  item.id = uuidv1();

  const params = {
    TableName,
    Item: item,
  };

  try {
    await dynamoDb.put(params).promise();
    res.send(item);
  } catch (error) {
    res.send({ error });
  }
};

const getMedia = async (req, res) => {
  const id = req.params.mediaId;

  const params = {
    TableName,
    ExpressionAttributeValues: {
      ':username': req.body.username,
      ':id': id,
    },
    KeyConditionExpression: 'username = :username and id = :id',
  };

  try {
    const { Items } = await dynamoDb.query(params).promise();
    res.send(Items);
  } catch (error) {
    res.send({ error });
  }
};

const updateMedia = (req, res) => {
  res.send('updateMedia');
};

const deleteMedia = async (req, res) => {
  const id = req.params.mediaId;

  const params = {
    TableName,
    Key: {
      username: req.body.username,
      id,
    },
  };

  try {
    const data = await dynamoDb.delete(params).promise();
    res.send(data);
  } catch (error) {
    res.send({ error });
  }
};

module.exports = {
  getAllMedia,
  createMedia,
  getMedia,
  updateMedia,
  deleteMedia,
};
