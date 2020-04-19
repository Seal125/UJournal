const JournalEntry = require('../models/JournalEntry');

const add = (req, res) => {
  const {
    userId, title, entryBody, isPrivate,
  } = req.body;
  JournalEntry.add(userId, title, entryBody, isPrivate)
    .then(() => res.redirect('/'))
    .catch(() => res.status(500).json({ message: 'Journal entry could not be added.' }));
};

const view = (req, res) => {
  const { entryId } = req.params;
  JournalEntry.view(entryId)
    .then((response) => res.status(200).json(response))
    .catch(() => res.status(500));
};

const update = (req, res) => {
  const { id } = req.params;
  const { title, entryBody, isPrivate } = req.body;
  
  JournalEntry.update(id, title, entryBody, isPrivate)
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(500));
};

const remove = (req, res) => {
  const { id } = req.params;
  
  JournalEntry.remove(id)
    .then((response) => console.log(response))
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
  view,
  update,
  remove,
  getAll,
  getAllPublic,
};
