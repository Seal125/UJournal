const express = require('express');
const usersController = require('../controllers/users');

const router = express.Router();

router.post('/users', usersController.register);
router.post('/login', usersController.login);
router.get('/logout', usersController.logout);

module.exports = router;
