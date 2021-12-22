const express = require('express');
const router = express.Router();
const {getReservations}=require('./../Controller/Reservations')


router.get('/api/reservations',getReservations);


module.exports=router;
