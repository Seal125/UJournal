const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const genToken = (payload) => {
  const jwtOpts = { expiresIn: '5h' };
  const secret = process.env.JWT_SECRET;
  return jwt.sign(payload, secret, jwtOpts);
};

const verifyUsername = (username) => {
  const regex = /^\w+$/;
  const maxLength = 32;
  const minLength = 4;
  return (
    regex.test(username)
    && username.length <= maxLength
    && username.length >= minLength
  );
};

const encryptPassword = (plainTextPass) => {
  const saltRounds = 8;
  return bcrypt.hash(plainTextPass, saltRounds).then((hash) => hash);
};

module.exports = {
  genToken,
  verifyUsername,
  encryptPassword,
};
