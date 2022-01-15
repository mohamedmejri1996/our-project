const express = require('express');
const router = express.Router();

const tacheController = require('./../controllers/tache');

router.get('/', tacheController.all);
router.get('/:id', tacheController.get);
router.post('/', tacheController.create);
router.put('/:id', tacheController.update);
router.delete('/:id',tacheController.delete);

module.exports = router;