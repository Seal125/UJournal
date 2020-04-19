const express = require('express');
const viewsController = require('../controllers/views');

const router = express.Router();

router.get('/signup', viewsController.getSignupForm);
router.get('/login', viewsController.getLoginForm);
router.get('/new-entry', viewsController.getEntryForm);
router.get('/explore/entries', viewsController.getExplorePage);
router.get('/explore/entries/:id', viewsController.getExploreEntry);

module.exports = router;
