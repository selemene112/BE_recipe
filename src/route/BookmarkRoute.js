const { BookmarkController } = require('../Controller/BookmarkController');

const express = require('express');
const RouteBookmark = express.Router();

const { VertifikasiToken } = require('../middleware/VertifikasiToken');

RouteBookmark.post('/:id', VertifikasiToken, BookmarkController);

module.exports = RouteBookmark;
