const { pool } = require('../config/db');

const AddBookmark = async (body) => {
  const result = await pool.query(
    `INSERT INTO Bookmark (id_recipe, id_nama)
           VALUES ($1, $2)
           RETURNING id, id_recipe,id_nama, created_at, updated_at`,
    [body.id_recipe, body.id_nama]
  );
  return result.rows[0];
};

const deleteBookmarkModel = async (id_recipe, id_nama) => {
  const queryDelete = ' DELETE FROM Bookmark WHERE id_recipe = $1 AND id_nama = $2 ';
  const Values = [id_recipe, id_nama];

  return pool.query(queryDelete, Values);
};

const validasiBookmark = async (id_nama, id_recipe) => {
  const QueryValidas = 'SELECT id_nama FROM Bookmark WHERE id_nama = $1 AND id_recipe = $2';
  const Values = [id_nama, id_recipe];

  return pool.query(QueryValidas, Values);
};

module.exports = {
  AddBookmark,
  deleteBookmarkModel,
  validasiBookmark,
};
