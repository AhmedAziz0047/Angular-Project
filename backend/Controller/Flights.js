const Flights=require('./../models/Flight');

exports.getFlights=(req, res)=>{
  Flights.find()
  .then(Flights=>res.status(300).json(Flights))
  .catch(err=>res.status(400).json({error: err.message}))
}
