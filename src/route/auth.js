const express = require('express');
const { VertifikasiToken } = require('../middleware/VertifikasiToken');
const Auth = express.Router();
const token = require('../middleware/RefreshToken');

Auth.post('/', VertifikasiToken, token.TokenRefresh);

module.exports = Auth;
