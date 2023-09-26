const { BookmarkController, getRecipesByBookmarkcontroller } = require('../Controller/BookmarkController');

const express = require('express');
const RouteBookmark = express.Router();

const { VertifikasiToken } = require('../middleware/VertifikasiToken');

RouteBookmark.post('/:id', VertifikasiToken, BookmarkController);
RouteBookmark.get('/allrecipeBookmark', VertifikasiToken, getRecipesByBookmarkcontroller);

module.exports = RouteBookmark;
