const express = require('express');
const { VertifikasiToken } = require('../middleware/VertifikasiToken');
const RouteRecipe = express.Router();
const upload = require('../middleware/multerphoto');
const ControllerUser = require('../Controller/RecipeController');
const Pagnation = require('../Controller/Pagination');

RouteRecipe.post('/', VertifikasiToken, upload.single('photo'), ControllerUser.CreateRecipeController);
RouteRecipe.get('/', VertifikasiToken, ControllerUser.GetallController);
RouteRecipe.get('/id/', VertifikasiToken, ControllerUser.GetbyID);
RouteRecipe.put('/:id', VertifikasiToken, upload.single('photo'), ControllerUser.UpdateRecipe);
RouteRecipe.get('/:id', VertifikasiToken, ControllerUser.DetailMenuController);
RouteRecipe.get('/pagination/recipe', VertifikasiToken, Pagnation.getDataDetail);

module.exports = RouteRecipe;
