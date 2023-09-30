const jwt = require('jsonwebtoken');
const secretKey = 'secretKey123';

const VertifikasiToken = async (req, res, next) => {
  const generateToken = req.header('Authorization');
  if (!generateToken) {
    return res.status(401).json({
      success: false,
      message: 'Input Token First',
    });
  }

  // console.log(generateToken);

  const token = generateToken.split(' ')[1];
  const token1 = generateToken.split(' ');

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'No token provided',
    });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    console.log('Inidecode');
    console.log(decoded);
    req.payload = decoded;
    next();
  } catch (error) {
    // console.log(error);
    return res.status(401).json({
      success: false,
      message: 'Invalid token',
    });
  }
};

module.exports = {
  VertifikasiToken,
};
