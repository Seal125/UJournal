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
  getEntryForm,
  getExplorePage,
  getExploreEntry,
  getEntriesPage,
  getEditPage,
  getAddPage,
};
