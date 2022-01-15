const Tache = require('./../models/tache');

// get all 
exports.all = ((req, res) => {
    Tache.find()
        .then(taches => res.status(200).json(taches))
        .catch(err => res.status(400).json({ message: err.message }));
});

// get by id
exports.get = ((req, res, next) => {
    Tache.findOne({ id: req.params.id })
      .then(tache => res.status(200).json(tache))
      .catch(error => res.status(404).json({ message: error.message }));
  });

// store 
exports.create = (req, res, next) => {
  const tache= new Tache({
    ...req.body
  });
  tache.save()
    .then(() => res.status(201).json({ message: 'tache created  !'}))
    .catch(error => res.status(400).json({ error }));
}

// update 
exports.update = (req, res, next) => {
    Tache.updateOne({ id: req.params.id }, { ...req.body, id: req.params.id })
    .then(() => res.status(200).json({ message: 'tache updated !'}))
    .catch(error => res.status(400).json({ error }));
}

// delete 
exports.delete = (req, res, next) => {
    Tache.deleteOne({ id: req.params.id })
    .then(() => res.status(200).json({ message: 'tache deleted !'}))
    .catch(error => res.status(400).json({ error }));
}


