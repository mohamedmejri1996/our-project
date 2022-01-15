const mongoose = require('mongoose');

const chantierSchema = new mongoose.Schema({
    id: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    datelancement: {type: String, required: true},
    datedefin: {type: String, required: true},
    adresse: {type: String, required: true},
    goals: {type: Array, required: true},
  
});
module.exports = mongoose.model('chantier', chantierSchema);