const express = require('express');
const router = express.Router();
const {createdata,readdata,updatedata,deletedata,readdatabyemail} = require("../controller/api");

//create or insert
router.post("/users",createdata);

//read
router.get("/users",readdata);

//read data by specific email address
router.get("/users/:email",readdatabyemail)

//update data by using specific email address
router.patch("/users/:email",updatedata)

//update data by using specific email address
router.delete("/users/:email",deletedata)

module.exports = router;