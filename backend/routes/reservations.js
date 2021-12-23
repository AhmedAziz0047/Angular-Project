const express = require('express');
const router = express.Router();
const {getReservations,deleteReservations,createReservation,updateReservations}=require('./../Controller/Reservations')

router.get('/api/reservations',getReservations);
router.post('/api/addReservations',createReservation);
router.delete('/api/deleteReservations/:id',deleteReservations);
router.put('/api/editReservations/:id', updateReservations);
// router.delete('/dr:id',deleteReservations);



module.exports=router;
