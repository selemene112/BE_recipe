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

  if (io) {
    io.emit('new comment', comment);
  } else {
    console.error('Socket.IO is not properly initialized.');
  }

  return comment;
};

// ======================== GET by idRecipe ===========================================

const GetbyidRecipe = async (id_recipe) => {
  const queryGETcom = 'SELECT * FROM comment WHERE id_recipe = $1';
  const value = [id_recipe];

  return pool.query(queryGETcom, value);
};

module.exports = {
  CreateComment,
  GetbyidRecipe,
};
