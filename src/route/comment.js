const express = require('express');
const RouteCom = express.Router();
const { VertifikasiToken } = require('../middleware/VertifikasiToken');
const { CommentCOntroller, GetCOm, likedController } = require('../Controller/commentController');

RouteCom.post('/:id', VertifikasiToken, CommentCOntroller);
RouteCom.get('/:id', VertifikasiToken, GetCOm);
RouteCom.post('/liked/', VertifikasiToken, likedController);

module.exports = RouteCom;
