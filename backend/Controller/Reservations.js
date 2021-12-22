const Reservations=require('./../models/Reservation');

exports.getReservations=(req, res)=>{
  Reservations.find()
  .then(Reservations=>res.status(300).json(Reservations))
  .catch(err=>res.status(400).json({error: err.message}))
}
