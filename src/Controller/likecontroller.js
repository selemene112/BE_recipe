const { likedModel, deleteLikeModel, validasiLike } = require('../model/like');

// ============================== Like and Unlike recipe =========================================

const likeController = async (req, res) => {
  const { id } = req.params;
  const payload = req.payload;
  let likeTrue = {
    id_recipe: id,
    nama: payload.nama,
    id_nama: payload.id,
  };
  const Validasi = await validasiLike(likeTrue.id_nama);
  console.log(Validasi);

  try {
    if (!Validasi.rows[0]) {
      await likedModel(likeTrue);
      return res.status(201).json({
        status: 'succes',
        message: 'You Like This Product',
      });
    } else {
      await deleteLikeModel(payload.id);
      return res.status(201).json({
        status: 'succes',
        message: 'You Unlike This Product',
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

module.exports = {
  likeController,
};
