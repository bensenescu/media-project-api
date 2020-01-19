const express = require('express');

const router = express.Router();
const mediaController = require('../controllers/mediaController');

// act on all media in the database
router.route('/media')
// QUERY PARAMETERS
// username: gives you all media made by a user
// quantity: quantity to get back, default most recent 20
  .get(mediaController.getAllMedia)
  .post(mediaController.createMedia);

// act on an individual piece of media,
router.route('/media/:mediaId')
  .get(mediaController.getMedia)
  .post(mediaController.updateMedia)
  .delete(mediaController.deleteMedia);

module.exports = router;
