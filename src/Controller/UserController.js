//=================================== IMPORT ================================================
const jwt = require('jsonwebtoken');
const cloudinary = require('../config/clouddinary');
const { status } = require('express/lib/response');
const { getUserByEmail } = require('../model/Auth');
const { hashPassword, comparePassword } = require('../utility/bacyripts');
const UserModel = require('../model/UserModel');
const { cacheQueryResult, getCachedQueryResult } = require('../utility/queryManager');
const secretKey = 'secretKey123';
//=================CREATE DATA========================================
const CreateController = async (req, res) => {
  const { password, email } = req.body;
  //===================== Vertifikasi Email===============================
  let emailVertifikasi = await getUserByEmail(email);
  if (emailVertifikasi.rows[0]) {
    return res.status(409).json({
      status: ' fail',
      message: 'Email already exists.',
      error: true,
    });
  }
  //===========================================================================
  let hash = await hashPassword(password);
  req.body.password = hash;
  console.log('photo====================');
  console.log(req.file);
  console.log('photo========================');

  try {
    const cloudphotoProfil = await cloudinary.uploader.upload(req.file.path, { Folders: 'profil' });
    console.log('cloudinary');
    console.log(cloudphotoProfil);
    const Profil = cloudphotoProfil.url;
    let data = {
      nama: req.body.nama,
      email: req.body.email,
      password: req.body.password,
      profil: Profil,
    };

    const result = await UserModel.CreateUserModel(data, Profil);
    console.log('rsult');
    console.log(result);
    res.status(201).json({
      status: 'succes',
      Message: 'Your Create Data Success',
      error: false,
      Data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: status,
      Message: 'Error creating data',
      error: true,
      Data: null,
    });
  }
};

//======================LOGIN ===========================================
const LoginUserCOntroller = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  console.log('test');
  //============================= Validasi =====================================
  let emailVertifikasi = await getUserByEmail(email);
  if (!emailVertifikasi.rows[0]) {
    return res.status(404).json({
      status: ' fail',
      message: 'Your Email Not Found',
      error: true,
    });
  }
  //=============================================================================
  // console.log(emailVertifikasi);
  const passworddb = emailVertifikasi.rows[0].password;
  // console.log(passworddb);
  let VertifikasiLogin = await comparePassword({ passReq: password, passData: passworddb });
  if (!VertifikasiLogin) {
    return res.status(401).json({
      status: 'failed',
      message: ' Your Password Authentication failed.',
      error: true,
      data: null,
    });
  }

  // ========================= INIT TOKEN ==========================================
  const token = emailVertifikasi.rows[0];
  console.log(token);
  const payload = {
    id: token.id,
    nama: token.nama,
    email: token.email,
  };
  console.log(payload);

  //=================================================================================

  const token1 = jwt.sign(payload, secretKey, { expiresIn: '1h' });

  try {
    res.status(201).json({
      status: 'Succes',
      message: ' Login Succes',
      error: false,
      data: token1,
    });
  } catch (error) {}
};

//=================== GET ALL DATA=====================================
const GetAllController = async (req, res) => {
  const userId = req.body;
  const query = `${JSON.stringify(userId)}`;

  try {
    const cachedResult = await getCachedQueryResult(query);
    if (cachedResult) {
      res.status(200).json({
        status: 'success',
        Message: 'Data retrieved from cache',
        error: false,
        Data: cachedResult,
      });
    } else {
      const data = await UserModel.GetAllModel();
      const data1 = data.rows;
      await cacheQueryResult(query, data);
      res.status(200).json({
        Status: 'Succes',
        message: ' Your Data Succes',
        error: false,
        data: data1,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: status,
      Message: 'Error creating data',
      error: error.message,
      Data: null,
    });
  }
};

//=================== GET BY ID=========================================
const GetbyIDCOntroller = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await UserModel.GetbyidModel(id);
    let profil = data.rows;
    res.status(200).json({
      status: 'succes',
      Message: 'Your Profil',
      error: false,
      data: profil,
    });
  } catch (error) {}
};

//============================== Update Data ==========================

const UpdateCOntroller = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const newData = req.body;
  console.log(newData);

  try {
    console.log('error');
    const data = await UserModel.UpdateModel(id, newData);

    res.status(201).json({
      status: 'Succes',
      Message: ' Edit Data Your Profil Succes',
      error: false,
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: status,
      message: 'Bad Server ',
      message: error.message,
    });
  }
};

//=============================== DELETE ===================================
const DeleteUserController = async (req, res) => {
  const { id } = req.params;
  try {
    await UserModel.DeleteUserModel(id);
    res.status(201).json({
      status: 'succes',
      message: 'Your Profil Succes Delete',
      error: false,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'Error Your Server ',
      message: ' Bad Server ',
      error: error.message,
    });
  }
};

//======================================= EXPORT=============================

module.exports = {
  CreateController,
  LoginUserCOntroller,
  GetAllController,
  GetbyIDCOntroller,
  UpdateCOntroller,
  DeleteUserController,
};
