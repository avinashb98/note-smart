const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

// Note Router
const note = require('./src/routes/note');

// mongodb config
require('./config/db');

// Initializing express app
const app = express();

// Body Parser Configuration
app.use(bodyParser.json({ // to support JSON-encoded bodies
  limit: '1mb'
}));

app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  limit: '1mb',
  extended: true
}));

// Router Initialization
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    messge: 'Welcome to NoteSmart API'
  });
});

// Note Endpoints
app.use('/note', note);

module.exports = app;
