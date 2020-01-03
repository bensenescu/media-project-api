const express = require('express');
const mediaRouter = require('./mediaRouter');

const baseRouter = express.Router();

mediaRouter.use('/media', mediaRouter);

mediaRouter.get('/hello', (req, res) => {
  res.send('baseRouter hellpo');
});


module.exports = baseRouter;
