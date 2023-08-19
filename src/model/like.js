const { pool } = require('../config/db');

const likedModel = async (body) => {
  const result = await pool.query(
    `INSERT INTO likes (liked, nama, id_nama)
       VALUES ($1, $2, $3)
       RETURNING id, liked, nama, id_nama, created_at, updated_at`,
    [body.liked, body.nama, body.id_nama]
  );
  return result.rows[0];
};

module.exports = {
  likedModel,
};
