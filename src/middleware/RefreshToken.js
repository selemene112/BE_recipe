const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const secretKey = 'secretKey123';
const { VertifikasiToken } = require('./VertifikasiToken');

const TokenRefresh = (req, res) => {
  console.log('ini Refresh Token Bos');
  console.log('error');
  const coba = req.payload;
  console.log(coba);
  let token = {
    id: req.payload.id,
    nama: req.payload.nama,
    email: req.payload.email,
  };

  const token1 = jwt.sign(token, secretKey, { expiresIn: '100s' });
  console.log('ini Token yang baru di generate');
  console.log(token1);

  try {
    res.status(201).json({
      status: 'Succes',
      message: ' Refresh Token Succes',
      error: false,
      data: token1,
    });
  } catch (error) {
    res.status(500).json({
      status: 'Bad Request',
      message: error.message,
    });
  }
};

module.exports = {
  TokenRefresh,
};
