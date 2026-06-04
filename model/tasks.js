const mongoose = require("mongoose");


const taskSchema = new mongoose.Schema({
    text :{
        type : String,
        required : true
    },
    complete : {
        type : Boolean
    }
});

const task = mongoose.model("task" , taskSchema);


module.exports = task;