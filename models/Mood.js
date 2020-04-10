const db = require('../db');

class Mood {
  static add(mood, entryId) {
    const queryText = 'INSERT INTO moods (mood, entry_id) VALUES ($1, $2)';
    return db.query(queryText, [mood, entryId]);
  }

  static getAll(entryId) {
    const queryText = 'SELECT * FROM moods WHERE entry_id = $1';
    return db.query(queryText, [entryId]).then((res) => res.rows);
  }

  static update(newMood, moodId) {
    const queryText = 'UPDATE moods SET mood = $1 WHERE mood_id = $2';
    return db.query(queryText, [newMood, moodId]);
  }

  static remove(moodId) {
    const queryText = 'DELETE FROM moods WHERE mood_id = $1';
    return db.query(queryText, [moodId]);
  }

  static removeAllFromEntry(entryId) {
    const queryText = 'DELETE FROM moods WHERE entry_id = $1';
    return db.query(queryText, [entryId]);
  }
}

module.exports = Mood;
