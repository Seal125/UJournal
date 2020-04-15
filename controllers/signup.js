const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const getSignupPage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../views/signup.html'));
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

const signUp = async (req, res) => {
  const { username, password } = req.body;
  const isUsernameValid = verifyUsername(username);
  if (!isUsernameValid) return res.sendStatus(500);
  const encryptedPass = await encryptPassword(password);
  try {
    await User.create(username, encryptedPass);
  } catch (err) {
    return res.sendStatus(501);
  }
  const jwtOpts = { expiresIn: '5h' };
  const token = jwt.sign(
    { username, password },
    process.env.JWT_SECRET,
    jwtOpts,
  );
  return res.cookie('ujournal_remembers', token).sendStatus(201);
};

module.exports = { getSignupPage, signUp };
