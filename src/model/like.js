const { pool } = require('../config/db');

const likedModel = async (body) => {
  const result = await pool.query(
    `INSERT INTO likes (id_recipe, nama, id_nama)
       VALUES ($1, $2, $3)
       RETURNING id, id_recipe, nama, id_nama, created_at, updated_at`,
    [body.id_recipe, body.nama, body.id_nama]
  );
  return result.rows[0];
};

const deleteLikeModel = async (id_nama) => {
  const queryDelete = ' DELETE FROM likes WHERE id_nama = $1 ';
  const Values = [id_nama];

  return pool.query(queryDelete, Values);
};

const CountLike = async (id_recipe) => {
  const QueryCountlike = ' SELECT COUNT(*) FROM likes WHERE id_recipe = $1 ';
  let values = [id_recipe];

  return pool.query(QueryCountlike, values);
};

const validasiLike = async (id_nama) => {
  const QueryValidas = 'SELECT id_nama FROM likes WHERE id_nama = $1';
  const Values = [id_nama];

  return pool.query(QueryValidas, Values);
};

module.exports = {
  likedModel,
  deleteLikeModel,
  validasiLike,
  CountLike,
};
