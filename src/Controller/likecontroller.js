const { likedModel, deleteLikeModel, validasiLike, CountLike } = require('../model/like');

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
      await deleteLikeModel(payload.id);
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

// const COuntLikeController = async (req, res) => {
//   const { id_recipe } = req.params;

//   try {
//     const DataCount = await CountLike(id_recipe);
//     res.status(200).json({
//       message: 'Count Like',
//       data: DataCount.rows[0].count,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       status: 'error',
//       Message: 'Create Count Like error',
//       error: true,
//       Data: null,
//     });
//   }
// };

module.exports = {
  likeController,
  // COuntLikeController,
};
