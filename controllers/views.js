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

const getExplorePage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../views/explore.html'));
};

const getExploreEntry = (req, res) => {
  res.sendFile(path.join(__dirname, '../views/viewExploreEntry.html'));
};

const getEntriesPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../views/entries.html'));
};

const getEditPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../views/edit.html'));
};

const getAddPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../views/entryForm.html'));
};

const getHomePage = (req, res) => {
  res.sendFile(path.join(__dirname, '../views/home.html'));
};

module.exports = {
  getSignupForm,
  getLoginForm,
  getEntryForm,
  getExplorePage,
  getExploreEntry,
  getEntriesPage,
  getEditPage,
  getAddPage,
  getHomePage,
};
