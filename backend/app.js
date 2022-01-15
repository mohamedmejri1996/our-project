const express = require('express');
const mongoose = require('mongoose');

const chantierRoutes = require('./routes/chantier')
const employeeRoutes = require('./routes/employee')
const tacheRoutes = require('./routes/tache')
const app = express();

mongoose.connect('mongodb://localhost:27017/ult2021-ga',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connected successfully to MongoDB !'))
  .catch(() => console.log('Connection failed to MongoDB !'));

// Express JSON middleware that allows the app to parse JSON data
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/chantiers', chantierRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/taches', tacheRoutes);

module.exports = app;