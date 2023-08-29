const { likeController } = require('../Controller/likecontroller');
//====================================== Import Utility ======================================
const express = require('express');
const Routelike = express.Router();
const { VertifikasiToken } = require('../middleware/VertifikasiToken');

Routelike.post('/:id', VertifikasiToken, likeController);

module.exports = Routelike;
