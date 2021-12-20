


const express=require("express");
const app = express();
const mongoose=require("mongoose");
const route=express.Router();
mongoose.connect(`mongodb+srv://aziz98:admin123456789@cluster0.rfqp4.mongodb.net/travel?retryWrites=true&w=majority`, {

}).then(() => {
  console.log("connected");
});

app.use(express.json());
route.get('/', (req, res) => {
  res.status(200).json({ message: 'aziz' })
});
app.listen(3000, () => {
  console.log('Server is running on port  3000');
});



