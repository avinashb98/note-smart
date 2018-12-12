const express = require('express');
const note = require('../controllers/note');
const upload = require('../../config/multer');

const router = express.Router();

router
  .get('/all', note.getAll)
  .get('/file', note.sendFile)
  .post('/', upload.single('attachment'), note.create)
  .post('/search', note.search)
  .put('/', note.update)
  .delete('/', note.remove);

module.exports = router;
