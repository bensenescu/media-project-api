'use strict'

const router = express.Router();
const mediaController = require('../controllers');

// act on all media in the database
router.route('/')
    // QUERY PARAMETERS
    // username: gives you all media made by a user
    // quantity: quantity to get back, default most recent 20
    .get(mediaController.getAllMedia)
    .post(mediaController.createMedia);

// act on an individual piece of media, 
router.route('/:mediaId')
    .get(mediaController.getMedia)
    .post(mediaController.updateMedia)
    .delete(mediaController.deleteMedia);