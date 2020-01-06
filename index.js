const express = require('express');
const AWS = require('aws-sdk');
const bodyParser = require('body-parser');

const credentials = new AWS.SharedIniFileCredentials();
AWS.config.credentials = credentials;
AWS.config.region = 'us-east-1';

const app = express();
const mediaRouter = require('./routes/mediaRouter');

app.use(bodyParser.json({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', mediaRouter);

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('Example app listening on port 3000!'));

module.exports = app;
