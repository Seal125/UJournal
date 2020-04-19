const express = require('express');
const viewsController = require('../controllers/views');
const path = require('path')
const router = express.Router();

router.get('/signup', viewsController.getSignupForm);
router.get('/login', viewsController.getLoginForm);
router.get('/new-entry', viewsController.getEntryForm);

module.exports = router;
