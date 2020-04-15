const path = require('path');
const User = require('../models/User');
const helpers = require('./helpers');

const getSignupPage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../views/signup.html'));
};

const signUp = async (req, res) => {
  const { username, password } = req.body;
  const isUsernameValid = helpers.verifyUsername(username);
  if (!isUsernameValid) return res.sendStatus(500);
  const encryptedPass = await helpers.encryptPassword(password);
  try {
    await User.create(username, encryptedPass);
  } catch (err) {
    return res.sendStatus(501);
  }
  const token = await helpers.genToken({ username, password });
  return res.cookie('ujournal_remembers', token).sendStatus(201);
};

module.exports = { getSignupPage, signUp };
