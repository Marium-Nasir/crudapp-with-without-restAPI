const mongoose = require('mongoose');
const validator = require('validator');

const restSchema = new mongoose.Schema({
    name : {
        type : String,
        required :true
    },
    age : {
        type : Number,
        required : true
    },
    email  : {
        type: String,
        required: true,
        unique : [true , "email must be unique"],
        validator(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid email id')
            }
        }
    }
});

const Restmodel = new mongoose.model("Restmodel",restSchema);

module.exports = Restmodel; 