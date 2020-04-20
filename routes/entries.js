const express = require('express');
const entryController = require('../controllers/entries');

const router = express.Router();

router.get('/api/entries', entryController.getAll);

router.get('/entries', entryController.show);

router.get('/api/explore/entries/:id', entryController.show);

router.get('/api/explore/entries', entryController.getAllPublic);

router.post('/add', entryController.add);

router.post('/edit/:id', entryController.update);

router.get('/remove/:id', entryController.remove);

module.exports = router;
