const { pool } = require('../config/db');

const getUserByEmail = async (email) => {
  console.log('model getUserByEmail');
  return new Promise((resolve, reject) =>
    pool.query(`SELECT * FROM users WHERE email='${email}'`, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    })
  );
};

module.exports = {
  getUserByEmail,
};
