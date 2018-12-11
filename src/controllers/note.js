const Note = require('../models/note');

const create = async (req, res) => {
  const { content } = req.body;
  const note = new Note({ content });
  try {
    await note.save();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      data: {}
    });
    return;
  }

  res.status(201).json({
    success: true,
    message: 'Note successfully created',
    data: {
      muse: {
        id: note._id,
        createdAt: note.createdAt,
        content: note.content
      }
    },
  });
};

module.exports = {
  create
};
