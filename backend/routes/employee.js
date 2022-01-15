const express = require('express');
const router = express.Router();

const employeeController = require('./../controllers/employee');

router.get('/', employeeController.all);
router.get('/:id', employeeController.get);
router.post('/', employeeController.create);
router.put('/:id', employeeController.update);
router.delete('/:id',employeeController.delete);

module.exports = router;