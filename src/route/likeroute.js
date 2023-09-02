const { likeController, COuntLikeController } = require('../Controller/likecontroller');
//====================================== Import Utility ======================================
const express = require('express');
const Routelike = express.Router();
const { VertifikasiToken } = require('../middleware/VertifikasiToken');

Routelike.post('/:id', VertifikasiToken, likeController);
Routelike.get('/CountLike/:id_recipe', VertifikasiToken, COuntLikeController);

module.exports = Routelike;
