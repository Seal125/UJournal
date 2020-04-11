const db = require('../db');

class JournalEntry {
  static addJournalEntry(userId, title, entryBody, isPrivate) {
    const queryText = 'INSERT INTO journal_entries (user_id, title, entry_body, is_private) VALUES ($1, $2, $3, $4);';
    return db.query(queryText, [userId, title, entryBody, isPrivate]);
  }

  static viewJournalEntry(entryId) {
    const queryText = 'SELECT * FROM journal_entries WHERE entry_id = $1;';
    return db.query(queryText, [entryId])
      .then((response) => response.rows[0]);
  }

  static editJournalEntry(entryId, title, entryBody, isPrivate) {
    const queryText = 'UPDATE journal_entries SET title=$2, entry_body=$3, is_private=$4 WHERE entry_id=$1;';
    return db.query(queryText, [entryId, title, entryBody, isPrivate]);
  }

  static deleteJournalEntry(entryId) {
    const queryText = 'DELETE FROM journal_entries WHERE entry_id = $1;';
    return db.query(queryText, [entryId])
      .then((response) => response.rows);
  }

  static getLastCreatedEntry(userId) {
    const queryText = 'SELECT * FROM journal_entries ORDER BY entry_id DESC LIMIT 1 WHERE user_id = $1;';
    return db.query(queryText, [userId])
      .then((response) => response.rows);
  }

  static getJournalEntryById(entryId) {
    const queryText = 'SELECT * FROM journal_entries WHERE entry_id = $1;';
    return db.query(queryText, [entryId])
      .then((response) => response.rows);
  }
}

module.exports = JournalEntry;
