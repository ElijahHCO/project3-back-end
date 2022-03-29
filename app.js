require('dotenv').config();
const { urlencoded } = require('express');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const app = express();
const equipmentController = require('./controllers/equipmentController')

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/project3-back-end'

// Connect to Mongo
const db = mongoose.connection;

mongoose
    .connect( process.env.MONGODB_URI , {useNewUrlParser: true})
    .then(()=> console.log('mongo connected: ', process.env.MONGODB_URI))
    .catch((err) => console.log(err));

db.on('disconnected', () => console.log('mongo disconnected'));

app.use(morgan('short'))
app.use(cors())
app.use(urlencoded({extended: true}));
app.use(express.json());

app.use('/equips', equipmentController)



app.listen(3001, ()=>{
    console.log('app is running')
})
