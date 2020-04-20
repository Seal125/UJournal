const getSignupForm = (req, res) => {
  res.render('signup');
};

const getLoginForm = (req, res) => {
  res.render('login');
};

const getEntryForm = (req, res) => {
  res.render('entryForm');
};

const getExplorePage = (req, res) => {
  res.render('explore');
};

const getExploreEntry = (req, res) => {
  res.render('viewExploreEntry');
};

const getEntriesPage = (req, res) => {
  res.render('entries');
};

const getEditPage = (req, res) => {
  res.render('edit');
};

const getAddPage = (req, res) => {
  res.render('entryForm');
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
};
