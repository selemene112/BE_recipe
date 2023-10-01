const { pool } = require('../config/db');

const getRecipe = async (data) => {
  const { search, searchBy, offset, limit } = data;
  try {
    let query = `
      SELECT
          r.id,
          r.title,
          r.ingredients,
          r.photo,
          r.category,
          u.nama AS user_name,
          u.profil AS user_profile
      FROM
          recipe r
      INNER JOIN
          users u ON r.user_id = u.id::VARCHAR
      WHERE
          ${searchBy} ILIKE $1
      LIMIT $2
      OFFSET $3`;

    const result = await pool.query(query, [`%${search}%`, limit, offset]);
    return result.rows;
  } catch (err) {
    throw err;
  }
};

const getRecipeCount = async (data) => {
  const { search, searchBy } = data;
  console.log('model getRecipeCount', search, searchBy);
  try {
    const result = await pool.query(
      `SELECT COUNT(*) AS count
      FROM recipe
      WHERE ${searchBy} ILIKE $1`,
      [`%${search}%`]
    );
    return result.rows[0].count;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getRecipe,
  getRecipeCount,
};
