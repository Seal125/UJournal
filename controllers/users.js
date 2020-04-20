const bcrypt = require('bcrypt');
const User = require('../models/User');
const helpers = require('./helpers');

const register = async (req, res) => {
  const { username, password } = req.body;
  const isUsernameValid = helpers.verifyUsername(username);
  if (!isUsernameValid) return res.sendStatus(500);
  const encryptedPass = await helpers.encryptPassword(password);
  try {
    await User.create(username, encryptedPass);
  } catch (err) {
    return res.sendStatus(501);
  }
  const token = helpers.genToken({ username, password });
  return res.cookie('ujournal_remembers', token).sendStatus(201);
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.getByUsername(username);
  if (!user) return res.sendStatus(403); // same status as wrong pass for sec

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.sendStatus(403);

  const token = await helpers.genToken({ username, password });
  return res.cookie('ujournal_remembers', token).sendStatus(200);
};

const logout = async (req, res) => {
  res.clearCookie('ujournal_remembers');
  res.redirect('/login');
};

module.exports = { register, login, logout };
