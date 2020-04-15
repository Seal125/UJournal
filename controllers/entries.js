const JournalEntry = require('../models/JournalEntry');

const add = (req, res) => {
  const {
    userId, title, entryBody, isPrivate,
  } = req.body;

  JournalEntry.addJournalEntry(title, entryBody, isPrivate)
    .then(() => JournalEntry.getLastCreated(userId))
    .then(() => res.status(201).json({ message: 'Journal entry added.' }))
    .catch(() => res.status(500).json({ message: 'Journal entry could not be added.' }));
};

const view = (req, res) => {
  const { entryId } = req.params;

  JournalEntry.view(entryId)
    .then((response) => res.status(200).json(response))
    .catch(() => res.status(500));
};

const update = (req, res) => {
  const { entryId } = req.params;
  const { title, entryBody, isPrivate } = req.body;

  JournalEntry.update(entryId, title, entryBody, isPrivate)
    .then(() => res.status(200))
    .catch(() => res.status(500));
};

const remove = (req, res) => {
  const { entryId } = req.params;

  JournalEntry.remove(entryId)
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
