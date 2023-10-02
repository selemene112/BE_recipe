const { CreateComment, GetbyidRecipe, getUserProfileAndCommentsByRecipeId } = require('../model/coment');
const { GetDetailMenubyID } = require('../model/RecipeModel');
const { likedModel } = require('../model/like');

//====================== COntroller Comment ======================================

const CommentCOntroller = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const getbyidcontroller = await GetDetailMenubyID(id);
  console.log('percobaan ');
  console.log(getbyidcontroller.rows[0].id);

  let jwt = req.payload;
  let body = req.body;
  console.log(jwt);
  let data = {
    id_recipe: getbyidcontroller.rows[0].id,
    id_profil: jwt.id,
    nama: jwt.nama,
    commentar: body.commentar,
  };

  console.log(data);

  const comment = await CreateComment(data);
  console.log(comment);

  try {
    res.status(201).json({
      status: ' Succes ',
      message: ' Add Your Commentar Succes ',
      error: false,
      writecom: comment,
    });
  } catch (error) {
    res.status(500).json({
      status: ' error ',
      message: ' Bad Server ',
      error: error.message,
    });
  }
};
//================================= GET comment ==================================

const GetCOm = async (req, res, next) => {
  const { id } = req.params;
  console.log(id);

  try {
    const data = await getUserProfileAndCommentsByRecipeId(id);
    console.log(data);
    res.status(200).json({
      status: ' Succes ',
      message: ' This Your Comment  ',
      error: false,
      comment: data.rows,
    });
  } catch (error) {
    res.status(500).json({
      status: ' error ',
      message: ' Bad Server ',
      error: error.message,
    });
  }
};
//============================== Liked ================================================

const likedController = async (req, res, next) => {
  const body = req.payload;

  let data = {
    liked: false,
    nama: body.nama,
    id_nama: body.id,
  };

  try {
    if (!data.liked) {
      data.liked = true;
    } else {
      data.liked = false;
    }
    console.log(data);

    const like = await likedModel(data);
    console.log('Like data:', like);

    next(); // Jangan lupa memanggil next setelah selesai
  } catch (error) {
    console.error(error);
    next(error); // Jika terjadi error, lemparkan ke error handler
  }
};

//=========================== MODULE EXPORT

module.exports = {
  CommentCOntroller,
  GetCOm,
  likedController,
};
