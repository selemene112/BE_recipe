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

const deleteLikeModel = async (id_recipe, id_nama) => {
  const queryDelete = ' DELETE FROM likes WHERE id_recipe = $1 AND id_nama = $2 ';
  const Values = [id_recipe, id_nama];

  return pool.query(queryDelete, Values);
};

const CountLike = async (id_recipe) => {
  const QueryCountlike = ' SELECT COUNT(*) FROM likes WHERE id_recipe = $1 ';
  let values = [id_recipe];

  return pool.query(QueryCountlike, values);
};

const validasiLike = async (id_nama, id_recipe) => {
  const QueryValidas = 'SELECT id_nama FROM likes WHERE id_nama = $1 AND id_recipe = $2';
  const Values = [id_nama, id_recipe];

  return pool.query(QueryValidas, Values);
};

const GetAllLikeRecipe = async (id_nama) => {
  const QueryGetAll = 'SELECT id_recipe FROM likes WHERE id_nama = $1';
  const Values = [id_nama];
  return pool.query(QueryGetAll, Values);
};

const getRecipesByLikes = async (id_nama) => {
  try {
    const query = `
      SELECT
          r.id AS recipe_id,
          r.title AS recipe_title,
          r.ingredients AS recipe_ingredients,
          r.category AS recipe_category,
          r.photo AS recipe_photo,
          r.user_id AS recipe_user_id,
          r.created_at AS recipe_created_at,
          r.updated_at AS recipe_updated_at
      FROM
          recipe r
      INNER JOIN
          likes l ON r.id::VARCHAR = l.id_recipe
      WHERE
          l.id_nama = $1;
    `;

    const { rows } = await pool.query(query, [id_nama]);
    return rows;
  } catch (error) {
    throw new Error(`Error getting recipes by likes: ${error.message}`);
  }
};

module.exports = {
  likedModel,
  deleteLikeModel,
  validasiLike,
  CountLike,
  GetAllLikeRecipe,
  getRecipesByLikes,
};
