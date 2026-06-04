const task = require("../model/tasks");
const SUCCESS = require("../utils/httpsstatus");



const getTasks = async(req , res)=>{
    const tasks = await task.find();
    res.json({state : SUCCESS ,message : "all tasks", data : tasks});
}


const addTask = async (req , res)=>{
    const {text} = req.body;
    const newTask = await task.create({
        text,
        complete : false
    });

    res.status(201).json({state : SUCCESS , message : "new create task", data : newTask});
}


const deleteTask = async(req , res)=>{
    const id = req.params.id;
    const deleteTask = await task.findByIdAndDelete(id);
    res.json({state : SUCCESS , message : "the task is deleted", data : deleteTask});
}


const updateTask = async(req , res)=>{
    const id = req.params.id;
    const updateTask = await task.findByIdAndUpdate(id , {complete : true} , { returnDocument: 'after' });
    res.json({state : SUCCESS , message : "the task is updated", data : updateTask});
}



module.exports = {
    getTasks,
    addTask,
    deleteTask,
    updateTask
}