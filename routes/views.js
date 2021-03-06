const express = require('express');
const viewsController = require('../controllers/views');

const router = express.Router();

router.get('/entries', viewsController.getEntriesPage);
router.get('/new-entry', viewsController.getEntryForm);
router.get('/explore/entries', viewsController.getExplorePage);
router.get('/explore/entries/:id', viewsController.getExploreEntry);
router.get('/edit/:id', viewsController.getEditPage);
router.get('/add', viewsController.getEntryForm);
module.exports = router;
