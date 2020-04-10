const db = require('../db');

class Mood {
  static add(mood, entryId) {
    const queryText = 'INSERT INTO moods (mood, entry_id) VALUES ($1, $2)';
    return db.query(queryText, [mood, entryId]);
  }

  static getAll(entryId) {
    const queryText = 'SELECT * FROM moods WHERE entry_id = $1';
    return db.query(queryText, [entryId]);
  }

  static update(newMood, entryId) {
    const queryText = 'UPDATE moods SET mood = $1 WHERE entry_id = $2';
    return db.query(queryText, [newMood, entryId]);
  }

  static removeOne(mood, entryId) {
    const queryText = 'DELETE FROM moods WHERE mood = $1 AND entry_id = $2';
    return db.query(queryText, [mood, entryId]);
  }

  static removeAll(entryId) {
    const queryText = 'DELETE FROM moods WHERE entry_id = $1';
    return db.query(queryText, [entryId]);
  }
}

module.exports = Mood;
