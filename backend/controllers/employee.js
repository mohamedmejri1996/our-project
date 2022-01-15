const Employee = require('./../models/employee');

// get all 
exports.all = ((req, res) => {
   Employee.find()
        .then(employees => res.status(200).json(employees))
        .catch(err => res.status(400).json({ message: err.message }));
});

// get by id
exports.get = ((req, res, next) => {
   Employee.findOne({ id: req.params.id })
      .then(employee => res.status(200).json(employee))
      .catch(error => res.status(404).json({ message: error.message }));
  });

// store 
exports.create = (req, res, next) => {
  const employee = new Employee({
    ...req.body
  });
  employee.save()
    .then(() => res.status(201).json({ message: 'employee created  !'}))
    .catch(error => res.status(400).json({ error }));
}

// update 
exports.update = (req, res, next) => {
    Employee.updateOne({ id: req.params.id }, { ...req.body, id: req.params.id })
    .then(() => res.status(200).json({ message: 'employee updated !'}))
    .catch(error => res.status(400).json({ error }));
}

// delete 
exports.delete = (req, res, next) => {
    Employee.deleteOne({ id: req.params.id })
    .then(() => res.status(200).json({ message: 'employee deleted !'}))
    .catch(error => res.status(400).json({ error }));
}

