const { likedModel, deleteLikeModel, validasiLike, CountLike, GetAllLikeRecipe, getRecipesByLikes } = require('../model/like');

// ============================== Like and Unlike recipe =========================================

const likeController = async (req, res) => {
  const { id } = req.params;
  const payload = req.payload;
  let likeTrue = {
    id_recipe: id,
    nama: payload.nama,
    id_nama: payload.id,
  };
  const Validasi = await validasiLike(likeTrue.id_nama, id);
  console.log(Validasi);
  console.log('INI ERROR BOS');
  console.log(likeTrue.id_nama, id);

  try {
    if (!Validasi.rows[0]) {
      await likedModel(likeTrue);
      const DataCount = await CountLike(id);
      return res.status(201).json({
        status: 'succes',
        message: 'You Like This Product',
        data: DataCount.rows[0].count,
      });
    } else {
      let data = await deleteLikeModel(id, likeTrue.id_nama);
      console.log('INI SUDAH DI EXKSESUSU');
      console.log(data);
      const DataCount = await CountLike(id);
      return res.status(201).json({
        status: 'succes',
        message: 'You Unlike This Product',
        data: DataCount.rows[0].count,
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

const COuntLikeController = async (req, res) => {
  const { id_recipe } = req.params;

  try {
    const DataCount = await CountLike(id_recipe);
    res.status(200).json({
      message: 'Count Like',
      data: DataCount.rows[0].count,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'error',
      Message: 'Create Count Like error',
      error: true,
      Data: null,
    });
  }
};

const GetAllLikeRecipeController = async (req, res) => {
  const { id } = req.payload;
  console.log('error ini');
  console.log(req.payload.id);
  console.log('error ini');

  try {
    const DataCount = await getRecipesByLikes(id);
    res.status(200).json({
      status: 'succes',
      message: 'Get All Like',

      data: DataCount,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'error',
      Message: 'Create Count Like error',
      error: true,
      Data: null,
    });
  }
};

module.exports = {
  likeController,
  COuntLikeController,
  GetAllLikeRecipeController,
};
