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
      message: 'Error in saving Note',
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


const remove = async (req, res) => {
  const { id } = req.body;
  try {
    await Note.findOneAndDelete({ _id: id });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Error in removing Note',
      data: {}
    });
    return;
  }

  res.status(200).json({
    success: true,
    message: 'Note Successfully Removed',
    data: {}
  });
};

module.exports = {
  create,
  remove
};
