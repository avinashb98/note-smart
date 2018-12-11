const express = require('express');
const note = require('../controllers/note');

const router = express.Router();

router
  .post('/', note.create)
  .put('/', note.update)
  .delete('/', note.remove);

module.exports = router;
