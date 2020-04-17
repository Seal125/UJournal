const db = require('../db');

class tags {
  static async createTag(entry_id,tag) {
    // First have to find out if the tag already exist and if it does grab the tag id and make an insertion into journal_entries_tag table (the table takes an entry_id and a tag_id). If the tag doesn't exist it will first creat the tag and then do the function mentioned previously. 
    const id = await db.query(`SELECT tags.name,tags.id FROM tags WHERE (tags.name = $1)`,[tag])
     if (id.rows.length = 0){
      await db.query(`INSERT INTO tags(name) VALUES($1)`,[tag])
      await db.query(`SELECT tags.name,tags.id FROM tags WHERE (tags.name = $1)`,[tag])
      db.query(`INSERT INTO journal_entries_tag(entry_id,tag_id)`,[entry_id,tagId])
     }else{
      let tagId = id.rows[0].id
      db.query(`INSERT INTO journal_entries_tag(entry_id,tag_id)`,[entry_id,tagId])
     }
  }


  static async getAllOfATag(tag){
  // Is going to go into all of the entries if is_private is false and the tag is matching it will be rendered
    let res = await db.query(`SELECT journal_entries.* FROM journal_entries
    JOIN journal_entries_tag
    ON (journal_entries_tag.entry_id = journal_entries.entry_id)
    JOIN tags
    ON (journal_entries_tag.tag_id = tags.id)
    WHERE (tags.name = $1)
    WHERE (journal_entries.is_Private = false)`,[tag])
    return res.rows
  }
 

  static async getAllOfAUsersTag(user_id,tag){
    // this function will get all of the entries that include the tag
    let res = await db.query(`SELECT journal_entries.title FROM journal_entries 
    JOIN journal_entries_tag ON (journal_entries_tag.entry_id = journal_entries.entry_id)
    JOIN tags ON (journal_entries_tag.tag_id = tags.id)
    JOIN users ON (journal_entries_tag.user_id = users.user_id)
    WHERE (users.user_id = $1 AND tags.name = $2)
    `,[user_id,tag])
    return res.rows
  }


  static async getAllUsersTags(id){
    // this function will get all of tags that a user has used
    let res = await db.query(`SELECT tags.name FROM tags
    JOIN journal_entries_tag ON (journal_entries_tag.tag_id = tags.id)
    WHERE (journal_entries_tag.user_id = $1)`,[id])
    return res.rows
    // THIS WILL HAVE DUPLICATES ASK MIKE HOW TO GET RID OF THEM
  }

  static async deleteTagFromEntry(entry,tag){
    await db.query(`DELETE FROM journal_entries_tag WHERE (entry_id = $1 AND tag_name = $2)`,[entry,tag])
  }
}

module.exports = tags;
