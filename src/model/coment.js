const { pool } = require('../config/db');
const { getIO } = require('../config/WebSocket');

//======================== Create Comment ========================================

const CreateComment = async (body) => {
  const result = await pool.query(
    `INSERT INTO comment (id_recipe, id_profil, nama, commentar)
        VALUES ($1, $2, $3, $4)
        RETURNING id, id_recipe, id_profil, nama, commentar, created_at, updated_at  `,
    [body.id_recipe, body.id_profil, body.nama, body.commentar]
  );
  const comment = result.rows[0];

  const io = getIO();

  return comment;
};

// ======================== GET by idRecipe ===========================================

const GetbyidRecipe = async (id_recipe) => {
  const queryGETcom = 'SELECT * FROM comment WHERE id_recipe = $1';
  const value = [id_recipe];

  return pool.query(queryGETcom, value);
};

const getUserProfileAndCommentsByRecipeId = async (recipeId) => {
  try {
    const query = `
      SELECT
          u.profil AS user_profile,
          c.id AS comment_id,
          c.id_recipe,
          c.id_profil,
          c.nama,
          c.commentar,
          c.created_at,
          c.updated_at
      FROM
          users u
      INNER JOIN
          comment c ON u.id = c.id_profil::UUID
      WHERE
          c.id_recipe = $1;
    `;

    const result = await pool.query(query, [recipeId]);
    return result;
  } catch (error) {
    throw new Error(`Error getting user profile and comments by recipe_id: ${error.message}`);
  }
};

module.exports = {
  CreateComment,
  GetbyidRecipe,
  getUserProfileAndCommentsByRecipeId,
};
