const db = require('../db');

class Tags {
  static async create(entryId, tag) {
    // First have to find out if the tag already exist and if it does grab the tag id and make an insertion into journal_entries_tag table (the table takes an entry_id and a tag_id). If the tag doesn't exist it will first creat the tag and then do the function mentioned previously.
    const id = await db.query('SELECT tags.name,tags.id FROM tags WHERE (tags.name = $1);', [tag]);
    if (id.rows.length = 0) {
      await db.query('INSERT INTO tags(name) VALUES($1);', [tag]);
      const tagId = await db.query('SELECT tags.id FROM tags WHERE (tags.name = $1);', [tag]);
      db.query('INSERT INTO journal_entries_tag(entry_id,tag_id);', [entryId, tagId]);
    } else {
      const tagId = id.rows[0].id;
      db.query('INSERT INTO journal_entries_tag(entry_id,tag_id);', [entryId, tagId]);
    }
  }


  static async getAllOfATagInSearch(tag) {
    const res = await db.query(`SELECT journal_entries.* FROM journal_entries
    JOIN journal_entries_tag
    ON (journal_entries_tag.entry_id = journal_entries.entry_id)
    JOIN tags
    ON (journal_entries_tag.tag_id = tags.id)
    WHERE (tags.name = $1)
    WHERE (journal_entries.is_Private = false);`, [tag]);
    return res.rows;
  }


  static async getAllOfAUsersEntriesWithTag(userId, tag) {
    const res = await db.query(`SELECT journal_entries.title FROM journal_entries
    JOIN journal_entries_tag ON (journal_entries_tag.entry_id = journal_entries.entry_id)
    JOIN tags ON (journal_entries_tag.tag_id = tags.id)
    JOIN users ON (journal_entries_tag.user_id = users.user_id)
    WHERE (users.user_id = $1 AND tags.name = $2);
    `, [userId, tag]);
    return res.rows;
  }


  static async getAllUsedByUser(id) {
    const res = await db.query(`SELECT DISTINCT tags.name FROM tags
    JOIN journal_entries_tag ON (journal_entries_tag.tag_id = tags.id)
    WHERE (journal_entries_tag.user_id = $1);`, [id]);
    return res.rows;
  }

  static async delete(entry, tag) {
    await db.query('DELETE FROM journal_entries_tag WHERE (entry_id = $1 AND tag_name = $2);', [entry, tag]);
  }
}


module.exports = Tags;
