const JournalEntry = require('../models/JournalEntry');

const addEntry = (req, res) => {
  const {
    userId, title, entryBody, isPrivate,
  } = req.body;

  JournalEntry.addJournalEntry(title, entryBody, isPrivate)
    .then(() => JournalEntry.getLastCreatedEntry(userId))
    .then(() => res.status(201))
    .catch(() => res.status(500).json({ message: 'Journal entry could not be added.' }));
};

const viewEntry = (req, res) => {
  const { entryId } = req.params;

  JournalEntry.viewJournalEntry(entryId)
    .then((response) => res.status(200).json(response))
    .catch(() => res.status(500));
};

const editEntry = (req, res) => {
  const { entryId } = req.params;
  const { title, entryBody, isPrivate } = req.body;

  JournalEntry.editJournalEntry(entryId, title, entryBody, isPrivate)
    .then(() => res.status(200))
    .catch(() => res.status(500));
};

const deleteEntry = (req, res) => {
  const { entryId } = req.params;

  JournalEntry.deleteJournalEntry(entryId)
    .then(() => res.status(204).json({ message: 'Deleted successfully.' }))
    .catch(() => res.status(500).json({ message: 'Journal entry could not be deleted.' }));
};

module.exports = {
  addEntry,
  viewEntry,
  editEntry,
  deleteEntry,
};
