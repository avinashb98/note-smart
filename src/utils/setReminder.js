require('dotenv').config();
const transporter = require('./emailService');

const setReminder = (time, message) => {
  const timeToGo = (new Date(time)).getTime() - Date.now();
  console.log(timeToGo / (1000 * 60));
  const mailOptions = {
    from: process.env.MAIL_ID,
    to: process.env.MAIL_TO,
    subject: 'Reminder for your note',
    text: message,
    replyTo: process.env.MAIL_ID
  };

  setTimeout(() => {
    transporter.sendMail(mailOptions, (err, res) => {
      if (err) {
        console.error('there was an error: ', err);
      } else {
        console.log('here is the res: ', res);
      }
    });
  }, timeToGo);
};
module.exports = setReminder;
