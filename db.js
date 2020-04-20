const { Pool } = require('pg');

const pool = new Pool({
  host: '/var/run/postgresql',
  user: 'seal125',
  database: 'journal',
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
