const { CreateComment, GetbyidRecipe } = require('../model/coment');
const { GetDetailMenubyID } = require('../model/RecipeModel');

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
  data = {
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
      data: comment,
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

const GetCOm = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    const data = await GetbyidRecipe(id);
    res.status(200).json({
      status: ' Succes ',
      message: ' This Your Comment  ',
      error: false,
      data: data.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      status: ' error ',
      message: ' Bad Server ',
      error: error.message,
    });
  }
};

//=========================== MODULE EXPORT

module.exports = {
  CommentCOntroller,
  GetCOm,
};
