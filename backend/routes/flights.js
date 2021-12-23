const express = require('express');
const router = express.Router();
const {getFlights,updateFlight,createFlight,deleteFlight}=require('./../Controller/Flights')



router.get('/api/getFlights',getFlights);
router.post('/api/addFlight',createFlight);
router.delete('/api/deleteFlight/:id',deleteFlight);
router.put('/api/editFlight/:id', updateFlight);


module.exports=router;
