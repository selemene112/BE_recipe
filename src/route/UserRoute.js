const express = require('express');
const { VertifikasiToken } = require('../middleware/VertifikasiToken');
const route = express.Router();
const upload = require('../middleware/multerphoto');
const UserController = require('../Controller/UserController');

route.post('/', upload.single('profil'), UserController.CreateController);
route.get('/', VertifikasiToken, UserController.GetAllController);
route.get('/:id', VertifikasiToken, UserController.GetbyIDCOntroller);
route.put('/:id', UserController.UpdateCOntroller);
route.delete('/:id', UserController.DeleteUserController);
route.post('/login/', UserController.LoginUserCOntroller);
route.get('/users/navbar', VertifikasiToken, UserController.NavbarController);

module.exports = route;
