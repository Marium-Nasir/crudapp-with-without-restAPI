//import schema
const Restmodel = require("../model/schema");

//function define for create and insert a single document
const createdata = async(req,res) => {
    try{
        const data = new Restmodel(req.body);
        await data.save();
        res.status(201).send(data);
    }catch(e){
        res.status(400).send(e)
    }
}

//function define for read whole collection's data
const readdata = async(req,res) => {
    try{
        // const data = new Restmodel(req.body);
        const data = await Restmodel.find().sort({"name" : 1});
        res.status(200).send(data);
    }catch(e){
        res.status(400).send(e)
    }
}


//function define for read specific collection's data
const readdatabyemail = async(req,res) => {
    try{
        const email = req.params.email;
        console.log(email);
       const readdata = await Restmodel.findOne({email});
       res.status(200).send(readdata);
    }catch(e){
        res.status(404).send(e);
    }
}

//function define for update specific collection's data
const updatedata = async(req,res) => {
    try{
        const email = req.params.email;
        console.log(email)
        const updateuser = await Restmodel.findOneAndUpdate({email}, req.body, {
            new : true
        })
        res.status(200).send(updateuser);
    }catch(e){
        res.status(500).send(e)
    }
}

//function define for delete specific collection's data
const deletedata = async(req,res) => {
    try{
        const email = req.params.email;
        const deleteuser = await Restmodel.findOneAndDelete({email});
        res.status(200).send(deleteuser);
    }catch(e){
        res.status(500).send(e)
    }
}

module.exports = {createdata,readdata,updatedata,deletedata,readdatabyemail};