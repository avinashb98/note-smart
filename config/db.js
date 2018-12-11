const mongoose = require('mongoose');

// Mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('database connected successfully');
  })
  .catch((err) => {
    console.log(err);
  });

mongoose.connection.on('error', (err) => {
  console.log(err);
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.');
  process.exit();
});