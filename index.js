const express = require('express');
const AWS = require('aws-sdk');
const bodyParser = require('body-parser');
const cors = require('cors');

const envConfig = require('./config/envConfig');

const { awsCredentials } = envConfig;

// eslint-disable-next-line max-len
AWS.config.credentials = new AWS.Credentials(awsCredentials.accessKeyId, awsCredentials.secretAccessKey, null);
AWS.config.region = 'us-east-1';

const app = express();
const mediaRouter = require('./routes/mediaRouter');

app.use(cors());
app.use(bodyParser.json({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', mediaRouter);

module.exports = app;
