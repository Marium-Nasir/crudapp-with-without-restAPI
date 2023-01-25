//make a connection
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/learnmongo").then
    (() => {
        console.log("connected")
    }).catch((err) => {
        console.log(err)
    })

//create schema or structure of the collection
const stdschema = new mongoose.Schema({
    stdname: {
        type: String,
        required: true
    },
    stdage: {
        type: Number,
        required: true
    },
    cname: {
        type: String,
        required: true
    },
    jdate: {
        type: Date,
        default: Date.now
    }
})

//creating model or collection name
const Stdcollection = new mongoose.model("Stddata", stdschema);

// insert or create a single document
// const indata = async () => {
//     try {
//         const stdval = new Stdcollection({
//             stdname: "Marium Nasir",
//             stdage: 23,
//             cname: "Nodejs"
//         })
//         const inone = await stdval.save();
//         console.log(inone);
//     }catch(err){
//         console.log(err)
//     }
// }
// indata();

// insert or create a single document
// const inmanydata = async() => {
//     try {
//         const stdval2 = new Stdcollection({
//             stdname: "Hamza Nasir",
//             stdage: 26,
//             cname: "Reactjs"
//         })

//         const stdval3 = new Stdcollection(
//             {
//             stdname: "Abdullah Nisar",
//             stdage: 20,
//             cname: "Reactjs"
//         }
//         )

//         const stdval4 = new Stdcollection( 
//             {
//             stdname: "Aneeba Sagheer",
//             stdage: 21,
//             cname: "JavaScript"
//         })


//         const stdval5 = new Stdcollection( {
//             stdname: "Maheen",
//             stdage: 24,
//             cname: "Reactjs"
//         })


//         const stdval6 = new Stdcollection({
//             stdname: "Qindeel Zehra",
//             stdage: 22,
//             cname: "Flutter"
//         })

//         const stdval7 = new Stdcollection(   {
//             stdname: "Urooj Fatima",
//             stdage: 23,
//             cname: "Nodejs"
//         })

//         const stdval8 = new Stdcollection({
//             stdname: "Ali",
//             stdage: 26,
//             cname: "Mongodb"
//         })


//         const stdval9 = new Stdcollection({
//             stdname: "Bibi Mariam",
//             stdage: 22,
//             cname: "Mongodb"
//         })


//         const stdval10 = new Stdcollection({
//             stdname: "Anosha Iqbal",
//             stdage: 21,
//             cname: "Reactjs"
//         })

//         const stdval11 = new Stdcollection({
//             stdname: "Tooba Amir",
//             stdage: 21,
//             cname: "Nodejs"
//         })

//         const stdval12 = new Stdcollection({
//             stdname: "Aqsa Nisar",
//             stdage: 21,
//             cname: "Nodejs"
//         })

//         const stdval13 = new Stdcollection({
//             stdname: "Neha Nisar",
//             stdage: 19,
//             cname: "Reactjs"
//         })
//         const inone = await Stdcollection.insertMany([stdval2,stdval3,stdval4,stdval5,stdval6,stdval7,stdval8,stdval9,stdval10,stdval11,stdval12,stdval13]);

//         console.log(inone);

//     }catch(err){
//         console.log(err)
//     }
// }
// inmanydata();

//Read Document
// const readata = async () => {
//     const getdata = await Stdcollection.find({cname : "Reactjs"}).select({stdname : 1 , _id : 0 , cname:1}).limit(2).skip(1);
//     console.log(getdata)
// }
// readata()

//read document using comparison operator
// const readdata = async () => {
//     const getdata = await Stdcollection.find({cname : {$in : "Nodejs"}}).limit(2);
//     console.log(getdata)
// }
// readdata()

//Read Document Using Logical Opertor
// const readdata = async () => {
//     const getdata = await Stdcollection.find({$and : [{stdage : 23},{cname : "Nodejs"}]})
//     console.log(getdata)
// }
// readdata()

// Read Document Using Sorting and Counting
// const readdata = async () => {
//     const getdata = await Stdcollection.find().count()
//     console.log(getdata)
// }
// readdata()
// const readdata = async () => {
//     const getdata = await Stdcollection.find().sort({stdname : -1})    //Descending Order
//     console.log(getdata)
// }
// readdata()

// //Update The Document it just shows how mmany documents are updated
// const updatedoc = async (id) => {
//     try {
//         const result = await Stdcollection.updateOne({ _id: id }, {
//             $set: {
//                 stdage: 22
//             }
//         })
//         console.log(result);
//     } catch (err) {
//         console.log(err);
//     }
// }
// updatedoc("63cc38583648442f4bd10b06")


//Update The Document it shows which data is updated
// const updatedoc = async (id) => {
//     try {
//         const result = await Stdcollection.findByIdAndUpdate({ _id: id }, {
//             $set: {
//                 stdage: 21
//             }
//         },
//         {
//             new : true
//         })
//         console.log(result);
//     } catch (err) {
//         console.log(err);
//     }
// }
// updatedoc("63cc411955c31ed7864f09aa")

// //delete the document butit only shows how many dcocument is deleted
// const dltdata = async (id) => {
//     try{
//         const result = await Stdcollection.deleteOne({_id : id})
//         console.log(result)
//     }catch(err){
//         console.log(err)
//     }
// }
// dltdata("63cc411955c31ed7864f09ac")

//delete the document and also shows the deleted document
// const dltdata = async (id) => {
//     try{
//         const result = await Stdcollection.findByIdAndDelete({_id : id})
//         console.log(result)
//     }catch(err){
//         console.log(err)
//     }
// }
// dltdata("63cc411955c31ed7864f09af")
