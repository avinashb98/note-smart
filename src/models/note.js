const mongoose = require('mongoose');

const { Schema } = mongoose;
const NoteSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  fileLocation: {
    type: String
  },
  reminder: {
    time: {
      type: Date
    },
    received: {
      type: Boolean
    }
  },
  createdAt: { type: Date, default: new Date() },
  lastUpdateAt: { type: Date, default: Date.now }
});

NoteSchema.post('save', () => {
  const data = this;
  data.lastUpdateAt = new Date();
});

module.exports = mongoose.model('Note', NoteSchema);
