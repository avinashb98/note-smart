require('dotenv').config();
const transporter = require('./emailService');
const Note = require('../models/note');

const updateStatus = async (noteId) => {
  let note;
  try {
    note = await Note.findById(noteId);
  } catch (error) {
    console.log(error);
    return;
  }
  note.reminder.received = true;
  note.save();
};

const setReminder = (noteId, time, message) => {
  const timeToGo = (new Date(time)).getTime() - Date.now();
  setTimeout(() => {
    const mailOptions = {
      from: process.env.MAIL_ID,
      to: process.env.MAIL_TO,
      subject: 'Reminder for your note',
      text: message,
      replyTo: process.env.MAIL_ID
    };
    transporter.sendMail(mailOptions, async (err, res) => {
      if (err) {
        console.error('there was an error: ', err);
      } else {
        console.log('here is the res: ', res);
        await updateStatus(noteId);
      }
    });
  }, timeToGo);
};
module.exports = setReminder;
