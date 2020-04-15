const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const genToken = (payload) => {
  const jwtOpts = { expiresIn: '5h' };
  const secret = process.env.JWT_SECRET;
  return jwt.sign(payload, secret, jwtOpts, (err, token) => token);
};

const verifyUsername = (username) => {
  const regex = /\w/g;
  const maxLength = 32;
  const minLength = 4;
  return (
    username.match(regex)
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
