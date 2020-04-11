const db = require('../db');

class User {
  static createUser(name, username, email, password) {
    const queryText = 'INSERT INTO users (name, username, email, password) VALUES ($1, $2, $3, $4);';
    return db.query(queryText, [name, username, email, password]);
  }

  static getUserByEmail(userEmail) {
    const queryText = 'SELECT * FROM users WHERE email = $1;';
    return db.query(queryText, [userEmail]).then((response) => response.rows);
  }
}

module.exports = User;
