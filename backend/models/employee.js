const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    id: {type: String, required: true},
    nom: {type: String, required: true},
    prenom: {type: String, required: true},
    emailt: {type: String, required: true},
    telephone: {type: String, required: true},
    travail: {type: String, required: true},
    image: {type: String, required: true},
});

module.exports = mongoose.model('employee', employeeSchema);