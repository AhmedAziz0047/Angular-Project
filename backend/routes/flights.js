const express = require('express');
const router = express.Router();
const {getFlights}=require('./../Controller/Flights')



router.get('/api/flights',getFlights);



router.put('/api/res/id',(req,res)=>{

});

module.exports=router;
