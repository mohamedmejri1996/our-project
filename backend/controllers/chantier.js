const Chantier = require('./../models/chantier');

// get all 
exports.all = ((req, res) => {
  Chantier.find()
        .then(chantiers => res.status(200).json(chantiers))
        .catch(err => res.status(400).json({ message: err.message }));
});

// get by id
exports.get = ((req, res, next) => {
  Chantier.findOne({ id: req.params.id })
      .then(chantier => res.status(200).json(chantier))
      .catch(error => res.status(404).json({ message: error.message }));
  });

// store 
exports.create = (req, res, next) => {
  const chantier = new Chantier({
    ...req.body
  });
  chantier.save()
    .then(() => res.status(201).json({ message: 'chantier created  !'}))
    .catch(error => res.status(400).json({ error }));
}

// update 
exports.update = (req, res, next) => {
   Chantier.updateOne({ id: req.params.id }, { ...req.body, id: req.params.id })
    .then(() => res.status(200).json({ message: 'chantier updated !'}))
    .catch(error => res.status(400).json({ error }));
}

// delete 
exports.delete = (req, res, next) => {
  Chantier.deleteOne({ id: req.params.id })
    .then(() => res.status(200).json({ message: 'chantier deleted !'}))
    .catch(error => res.status(400).json({ error }));
}