const bcrypt = require('bcrypt');
const User = require('../models/User');
const helpers = require('./helpers');

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.getByUsername(username);
  if (!user) return res.sendStatus(404);

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.sendStatus(403);

  const token = await helpers.genToken({ username, password });
  return res.cookie('ujournal_remembers', token).sendStatus(200);
};

module.exports = login;
