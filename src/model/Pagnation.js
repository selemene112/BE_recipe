const { pool } = require('../config/db');

const getRecipe = async (data) => {
  const { search, searchBy, offset, limit } = data;
  console.log('model getRecipe', search, searchBy, offset, limit);
  try {
    const result = await pool.query(
      `SELECT id, title, ingredients, photo, category
      FROM recipe
      WHERE ${searchBy} ILIKE $1
      LIMIT $2
      OFFSET $3`,
      [`%${search}%`, limit, offset]
    );
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
