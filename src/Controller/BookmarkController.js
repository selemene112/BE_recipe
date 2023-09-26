const { AddBookmark, deleteBookmarkModel, validasiBookmark, getRecipesByBookmark } = require('../model/BookmarkModel');

const BookmarkController = async (req, res) => {
  const { id } = req.params;
  console.log('error');
  console.log(id);
  const payload = req.payload.id;
  console.log(payload);

  let body = {
    id_recipe: id,
    id_nama: payload,
  };

  try {
    const Validasi = await validasiBookmark(payload, id);

    if (!Validasi.rows[0]) {
      await AddBookmark(body);
      res.status(201).json({
        message: 'Bookmark Succes',
        status: 'Succes',
        error: false,
      });
    } else {
      await deleteBookmarkModel(id, payload);
      res.status(200).json({
        message: 'Un Bookmark Recipe',
        status: 'Succes',
        error: false,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'error',
      Message: 'Error creating data',
      error: true,
      Data: null,
    });
  }
};

const getRecipesByBookmarkcontroller = async (req, res) => {
  const payload = req.payload.id;

  try {
    const data = await getRecipesByBookmark(payload);
    console.log(data);
    res.status(200).json({
      status: 'succes',
      Message: 'Your Recipe',
      error: false,
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'error',
      Message: 'Error creating data',
      error: true,
      Data: null,
    });
  }
};

module.exports = {
  BookmarkController,
  getRecipesByBookmarkcontroller,
};
