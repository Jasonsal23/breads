// DEPENDENCIES
const express = require('express');
const morgan = require('morgan');

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

app.use(morgan('tiny'));

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads!')
})

//Breads
const breadsController =require('./controllers/breads_controller.js')
app.use('/breads', breadsController);

// LISTEN
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
})

