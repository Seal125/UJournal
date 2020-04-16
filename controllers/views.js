const path = require('path');

const getSignupForm = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../views/signup.html'));
};

const getLoginForm = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../views/login.html'));
};

const getEntryForm = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../views/entryForm.html'));
};

module.exports = {
  getSignupForm,
  getLoginForm,
  getEntryForm,
};
