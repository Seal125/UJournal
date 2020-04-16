const express = require('express');
const usersController = require('../controllers/users');

const router = express.Router();

router.post('/users', usersController.register);

module.exports = router;
