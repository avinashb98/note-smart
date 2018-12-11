const express = require('express');
const note = require('../controllers/note');

const router = express.Router();

router
  .get('/all', note.getAll)
  .post('/', note.create)
  .put('/', note.update)
  .delete('/', note.remove);

module.exports = router;
