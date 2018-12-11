const express = require('express');
const note = require('../controllers/note');

const router = express.Router();

router.post('/create', note.create);

module.exports = router;
