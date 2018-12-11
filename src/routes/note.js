const express = require('express');
const note = require('../controllers/note');
const upload = require('../../config/multer');

const router = express.Router();

router
  .get('/all', note.getAll)
  .post('/', upload.single('attachment'), note.create)
  .put('/', note.update)
  .delete('/', note.remove);

module.exports = router;
