const express = require('express');
const router = express.Router();

const chantierController = require('./../controllers/chantier');

router.get('/', chantierController.all);
router.get('/:id', chantierController.get);
router.post('/', chantierController.create);
router.put('/:id', chantierController.update);
router.delete('/:id', chantierController.delete);

module.exports = router;
