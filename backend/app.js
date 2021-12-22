const express=require('express');

const app=express();

app.use((req, res)=>{
  res.json('hhhhhh');
})

module.exports=app;
