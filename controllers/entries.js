const JournalEntry = require('../models/JournalEntry');

const add = (req, res) => {
  const {
    userId, title, entryBody, isPrivate,
  } = req.body;
  JournalEntry.add(userId, title, entryBody, isPrivate)
    .then(() => res.redirect('/'))
    .catch(() => res.status(500).json({ message: 'Journal entry could not be added.' }));
};

const show = (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;
  JournalEntry.show(userId, id)
    .then((response) => res.status(200).json(response))
    .catch(() => res.status(500));
};

const update = (req, res) => {
  const { id } = req.params;
  const { title, entryBody, isPrivate } = req.body;

  JournalEntry.update(id, title, entryBody, isPrivate)
    .then(() => res.status(200))
    .catch(() => res.status(500));
};

const remove = (req, res) => {
  const { id } = req.params;

  JournalEntry.remove(id)
    .then(() => res.status(204).json({ message: 'Deleted successfully.' }))
    .catch(() => res.status(500).json({ message: 'Journal entry could not be deleted.' }));
};

const getAll = (req, res) => {
  const { userId } = req.body;

  JournalEntry.getAll(userId)
    .then((response) => res.status(200).json(response))
    .catch(() => res.status(500).json({ message: 'Could not get all journal entries.' }));
};

const getAllPublic = (req, res) => {
  JournalEntry.getAllByPublic()
    .then((response) => res.status(200).json(response))
    .catch(() => res.status(500).json({ message: 'Could not get all public entries.' }));
};


module.exports = {
  add,
  show,
  update,
  remove,
  getAll,
  getAllPublic,
};
