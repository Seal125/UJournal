const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const authenticate = async (req, res, next) => {
  const token = req.cookies.ujournal_remembers;

  if (!token) return res.sendStatus(401); // unauthenticated, unknown identity

  const payload = jwt.verify(token, process.env.JWT_SECRET);
  if (!payload) return res.sendStatus(403);

  const { username } = payload;
  const user = await User.getByUsername(username);
  req.body.userId = user.user_id;
  return next();
};

module.exports = authenticate;
