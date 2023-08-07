const { pool } = require('../config/db');

const CekID = async (id) => {
  const Query = ' SELECT * FROM recipe WHERE id = $1';
  const value = [id];

  return pool.query(Query, value);
};

module.exports = {
  CekID,
};
