const express = require('express');
const entryController = require('../controllers/entries');

const router = express.Router();

router.get('/entries', entryController.getAll);

router.get('/entries/:id', entryController.view);

router.get('/explore/entries', entryController.getAllPublic);

router.post('/entries', entryController.add);

router.put('/entries/:id', entryController.update);

router.delete('/entries/:id', entryController.remove);

module.exports = router;
