const express = require('express');
const signupController = require('../controllers/signup');

const router = express.Router();
router.get('/signup', signupController.getSignupPage);
router.post('/signup', signupController.signUp);

module.exports = router;
