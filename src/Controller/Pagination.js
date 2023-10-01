const Modelrecipe = require('../model/Pagnation');

const getDataDetail = async (req, res, next) => {
  const { search, searchBy, limit } = req.query;

  let page = req.query.page || 1;
  let limiter = limit || 5;

  const data = {
    search: search || '',
    searchBy: searchBy || 'title',
    offset: (page - 1) * limiter,
    limit: limit || 5,
  };

  try {
    let dataRecipe = await Modelrecipe.getRecipe(data);
    let dataRecipeCount = await Modelrecipe.getRecipeCount(data);

    let pagination = {
      totalPage: Math.ceil(dataRecipeCount / limiter),
      totalData: dataRecipeCount,
      pageNow: parseInt(page),
    };

    console.log('dataRecipe');
    console.log(dataRecipe);
    console.log('total data');
    console.log(dataRecipeCount);

    res.status(200).json({
      status: 200,
      message: 'get data recipe success',
      data: dataRecipe,
      pagination,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 500,
      message: 'Failed to get data recipe',
      error: err.message,
      data: null,
    });
  }
};

module.exports = {
  getDataDetail,
};
