const Note = require('../models/note');

const getAll = async (req, res) => {
  let notes;
  try {
    notes = await Note.find();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Error in fetching Notes',
      data: {}
    });
    return;
  }

  const filteredNotes = [];

  notes.forEach((note) => {
    filteredNotes.push({
      id: note._id,
      content: note.content,
      lastUpdateAt: note.lastUpdateAt
    });
  });

  res.status(200).json({
    success: true,
    message: 'List of Notes',
    data: {
      notes: filteredNotes
    }
  });
};

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
      note: {
        id: note._id,
        createdAt: note.createdAt,
        content: note.content
      }
    },
  });
};

const update = async (req, res) => {
  const { id, content } = req.body;
  const updatedNote = {
    content
  };
  try {
    await Note.findByIdAndUpdate(id, updatedNote, { new: true });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error in Updating Note',
      data: {}
    });
    return;
  }

  res.status(200).json({
    success: true,
    message: 'Note Successfully Updated',
    data: {}
  });
};

const remove = async (req, res) => {
  const { id } = req.body;
  try {
    await Note.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Error in Removing Note',
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
  getAll,
  create,
  update,
  remove
};
