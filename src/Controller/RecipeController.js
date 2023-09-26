const cloudinary = require('../config/clouddinary');
const recipeModel = require('../model/RecipeModel');
const { CekID } = require('../model/AuthRecipe');
const { VertifikasiToken } = require('../middleware/VertifikasiToken');

// =========================== Import ===============================

//=============================== Create Recipe ========================

const CreateRecipeController = async (req, res) => {
  console.log('jwt');

  const jwt = req.payload;
  console.log(jwt);
  const cloudphotoProfil = await cloudinary.uploader.upload(req.file.path, { Folders: 'profil' });
  console.log(cloudphotoProfil);
  let data = {
    title: req.body.title,
    ingredients: req.body.ingredients,
    category: req.body.category,
    photo: cloudphotoProfil.url,
    user_id: jwt.id,
  };
  console.log(data);
  try {
    const modeldata = await recipeModel.CreateRecipeModel(data);
    res.status(201).json({
      status: 'Succes',
      message: ' Your Data Recipe Succes Created',
      error: false,
      data: modeldata,
    });
  } catch (error) {
    console.log(error);
  }
};

//================================ Get All =============================
const GetallController = async (req, res) => {
  try {
    const data = await recipeModel.GetallRecipeModel();
    res.status(200).json({
      status: 'Succes',
      message: ' Data All Recipe',
      error: false,
      data: data.rows,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'Succes',
      Message: 'Error creating data',
      error: true,
      Data: null,
    });
  }
};

// =============================== Get by Id =================================
const GetbyID = async (req, res) => {
  const id = req.payload.id;

  try {
    const data = await recipeModel.GetbyIdModel(id);

    const Counts = await recipeModel.CountRecipeModel(id);
    console.log(Counts);
    res.status(200).json({
      status: 'succes',
      message: ' Your Recipe ',
      error: false,
      data: data.rows,
      count: Counts.rowCount,
    });
  } catch (error) {
    console.log(error);
  }
};

// ================================= Get Detail Menu by id ========================

const DetailMenuController = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await recipeModel.GetDetailMenubyID(id);
    res.status(200).json({
      status: 'Succes',
      Message: 'This Detail Menu',
      error: false,
      data: data.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      Status: 'Faild',
      Message: 'Your Server Bad',
      error: error.message,
      data: null,
    });
  }
};

//================================ Update recipe ================================
const UpdateRecipe = async (req, res) => {
  const { id } = req.params;
  let newdata = req.body;
  console.log(req.file);
  const data = await CekID(id);
  const fix = data.rows[0].user_id === req.payload.id;
  if (!fix) {
    res.status(403).json({
      status: 'Access forbidden.',
      message: 'You do not have sufficient permissions to edit this data. Please contact the administrator for assistance.',
    });
  }
  const caca = await cloudinary.uploader.upload(req.file.path, { Folders: 'profil' });
  console.log(caca);
  try {
    let body = {
      title: newdata.title,
      ingredients: newdata.ingredients,
      category: newdata.category,
      photo: caca.url,
    };

    const data1 = await recipeModel.UpdateRecipe(id, body);
    res.status(201).json({
      status: 'Succes',
      message: ' Succes Edit Your Recipe',
      error: false,
      data: data1,
    });
  } catch (error) {
    console.log(error);
  }
};

//=============================== EXPORT ===============================
module.exports = {
  CreateRecipeController,
  GetallController,
  DetailMenuController,

  GetbyID,
  UpdateRecipe,
};
