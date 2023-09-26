const { pool } = require('../config/db');

// ================================= Import =====================================

// ================================== CREATE RECIPE ==============================
const CreateRecipeModel = async (body) => {
  const result = await pool.query(
    `INSERT INTO recipe (title, ingredients, category, photo, user_id)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING id,title,ingredients,category,photo,user_id,created_at, updated_at`,
    [body.title, body.ingredients, body.category, body.photo, body.user_id]
  );
  return result.rows[0];
};

//=================================== Get all ===================================

const GetallRecipeModel = async () => {
  const QueryGetall = ' SELECT * FROM recipe ';

  return pool.query(QueryGetall);
};

// ================================ Get Menu Build By Id User ============================

const GetbyIdModel = async (user_id) => {
  const QueryGetbyID = 'SELECT * FROM recipe WHERE user_id = $1';
  const Value = [user_id];

  return pool.query(QueryGetbyID, Value);
};

//================================== Get Detail Menu By Id =======================================

const GetDetailMenubyID = async (id) => {
  const query = 'SELECT * FROM recipe WHERE id = $1';
  const value = [id];

  return pool.query(query, value);
};
// ================================= Update Recipe ===================================
const UpdateRecipe = async (id, body) => {
  const result = await pool.query(
    `UPDATE recipe 
        SET title = $1, ingredients = $2, category = $3, photo = $4
        WHERE id = $5
        RETURNING id,title,ingredients,category,photo,user_id,created_at, updated_at`,
    [body.title, body.ingredients, body.category, body.photo, id]
  );
  return result.rows[0];
};

// ================================= Get Count Recipe =================================

const CountRecipeModel = async (id) => {
  const query = 'SELECT count(*) as count FROM recipe WHERE id = $1';
  const value = [id];
  return pool.query(query, value);
};
//================================== EXPORT ===================================

module.exports = {
  CreateRecipeModel,
  GetallRecipeModel,
  GetbyIdModel,
  GetDetailMenubyID,
  UpdateRecipe,
  CountRecipeModel,
};
