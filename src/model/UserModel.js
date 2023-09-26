const { status } = require('express/lib/response');
const { pool } = require('../config/db');

// ================ Create Data===================
const CreateUserModel = async (body) => {
  try {
    const result = await pool.query(
      `INSERT INTO users (nama, email, password, profil)
             VALUES ($1, $2, $3, $4)
             RETURNING id, nama,email, password, profil`,
      [body.nama, body.email, body.password, body.profil]
    );

    return result.rows[0];
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: status,
      message: 'Bad Server ',
      error: error.message,
    });
  }
};
//================= Login ========================

const LoginUserModel = async (email, password) => {
  const LoginUserQuerySql = 'SELECT * FROM users WHERE email = $1 AND password = $2';
  const values = [email, password];

  return pool.query(LoginUserQuerySql, values);
};

// const CountPasswordUser = async (id) = {

// }

//================== GET ALL DATA ==================
const GetAllModel = async () => {
  try {
    const GetAllquery = 'SELECT * FROM users';
    return pool.query(GetAllquery);
  } catch (error) {
    res.status(500).json({
      status: status,
      message: 'Bad Server ',
      error: error.message,
    });
  }
};

//================== GET BY ID ================================
const GetbyidModel = async (id) => {
  try {
    const GetbyidQuery = 'SELECT * FROM users where id = $1';
    const value = [id];

    return pool.query(GetbyidQuery, value);
  } catch (error) {
    res.status(500).json({
      status: status,
      message: 'Bad Server ',
      error: error.message,
    });
  }
};

//==================== Update ==================================
const UpdateModel = async (id, body) => {
  const result = await pool.query(
    `UPDATE users
     SET nama = $1, email = $2, password = $3, profil = $4
     WHERE id = $5
     RETURNING id, nama, email, password, profil`,
    [body.nama, body.email, body.password, body.profil, id]
  );

  return result.rows[0];
};

//====================== Delete ================================

const DeleteUserModel = async (id) => {
  const queryDeleteUser = 'DELETE FROM users WHERE id = $1';
  const value = [id];

  return pool.query(queryDeleteUser, value);
};

// ======================= Get Count ===============================
//======================== EXPORT=====================

module.exports = {
  CreateUserModel,
  LoginUserModel,
  GetAllModel,
  GetbyidModel,
  UpdateModel,
  DeleteUserModel,
};
