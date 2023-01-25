const mongoose = require('mongoose');
const validator = require('validator');
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/learnrestapi").then(()=>{
    console.log("connected");
}).catch((e) => {
    console.log(e)
})