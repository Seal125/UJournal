const { Pool } = require('pg');

const pool = new Pool({
  user: 'annehyacinthe',
  host: 'localhost',
  database: 'ex',
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
