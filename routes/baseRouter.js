'use strict'

const router = express.Router();

const mediaRouter = require('./mediaRouter');

router.use('/media', mediaRouter);

export default router;

