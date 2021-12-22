const express=require('express');

const app=express();

app.get('/api/flights',(req,res)=>{
  const flights =[
    {
    'id':'fefef',
    'nom':'aaze'
  }
];
res.json(flights);
});

module.exports=app;
