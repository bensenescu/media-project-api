const serverless = require('serverless-http');
const express = require('express');

const app = express();
const mediaController = require('./controllers/mediaController');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/hello', (req, res) => {
  res.send('hello');
});

// act on all media in the database
app.route('/api/media')
// QUERY PARAMETERS
// username: gives you all media made by a user
// quantity: quantity to get back, default most recent 20
  .get(mediaController.getAllMedia)
  .post(mediaController.createMedia);

// act on an individual piece of media,
app.route('/api/media/:mediaId')
  .get(mediaController.getMedia)
  .post(mediaController.updateMedia)
  .delete(mediaController.deleteMedia);

module.exports.handler = serverless(app);
