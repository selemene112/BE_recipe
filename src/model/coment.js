const { pool } = require('../config/db');

//======================== Create Comment ========================================

const CreateComment = async (body) => {
  const result = await pool.query(
    `INSERT INTO comment (id_recipe, id_profil, nama, commentar)
        VALUES ($1, $2, $3, $4)
        RETURNING id, id_recipe, id_profil, nama, commentar, created_at, updated_at  `,
    [body.id_recipe, body.id_profil, body.nama, body.commentar]
  );
  return result.rows[0];
};

// ======================== GET by idRecipe ===========================================

const GetbyidRecipe = async (id_recipe) => {
  queryGETcom = 'SELECT * FROM comment WHERE id_recipe = $1';
  value = [id_recipe];

  return pool.query(queryGETcom, value);
};

module.exports = {
  CreateComment,
  GetbyidRecipe,
};
