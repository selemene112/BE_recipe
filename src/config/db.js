const Pool = require('pg').Pool;
require('dotenv').config();
const pool = new Pool({
  user: process.env.user,
  host: process.env.host,
  database: process.env.database,
  password: process.env.password,
  port: 5432,
});
pool.connect(function (err) {
  if (err) throw err;
  console.log('Connected!');
});
module.exports = { pool };
