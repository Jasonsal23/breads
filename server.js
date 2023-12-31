// DEPENDENCIES
const express = require('express');
const morgan = require('morgan');
const methodOverride=require('method-override')
const mongoose = require('mongoose')
require('dotenv').config()
mongoose.set("strictQuery", false)
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true, useUnifiedTopology:true},)

// CONFIGURATION
//require('dotenv').config()
const PORT = process.env.PORT
const app = express()

app.use(morgan('tiny'));

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads!')
})


//Breads
const breadsController =require('./controllers/breads_controller.js')
app.use('/breads', breadsController);

//bakers
const bakersController= require('./controllers/bakers_controller.js')
app.use('/bakers', bakersController)

// LISTEN
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
})

//404 Page
app.get('*', (req, res)=>{
    res.send('404')
})