const express = require('express');
const RouteCom = express.Router();
const { VertifikasiToken } = require('../middleware/VertifikasiToken');
const { CommentCOntroller, GetCOm } = require('../Controller/commentController');

RouteCom.post('/:id', VertifikasiToken, CommentCOntroller);
RouteCom.get('/:id', VertifikasiToken, GetCOm);

module.exports = RouteCom;
