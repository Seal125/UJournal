const { Pool } = require('pg');

const pool = new Pool({
  user: '',
  host: '',
  database: '',
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
