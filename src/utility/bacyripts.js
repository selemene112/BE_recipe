const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

const comparePassword = async ({ passReq, passData, res }) => {
  const isMatch = await bcrypt.compare(passReq, passData);
  return isMatch;
};

module.exports = {
  hashPassword,
  comparePassword,
};
