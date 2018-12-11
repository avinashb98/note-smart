const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

// mongodb config
require('./config/db');

// Initializing express app
const app = express();

//Body Parser Configuration
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

module.exports = app;
