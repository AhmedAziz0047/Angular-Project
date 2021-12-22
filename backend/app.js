const express = require('express');
const mongoose = require('mongoose');
const app=express();
const flights =require('./models/Flight');

mongoose.connect('mongodb://localhost:27017/travel',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connected successfully to MongoDB !'))
  .catch(() => console.log('Connection failed to MongoDB !'));


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.get('/api/flights',(req,res)=>{
    flights.find()
      .then(flights=>res.status(300).json(flights))
      .catch(err=>res.status(400).json({error: err.message}))
});



module.exports=app;
