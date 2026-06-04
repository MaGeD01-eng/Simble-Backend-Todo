const mongoose = require("mongoose");


const connectDb = ()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("connect database!")
    })
    .catch((err)=>{
        console.log("connect error!" , err)
    });
} 


module.exports = connectDb;