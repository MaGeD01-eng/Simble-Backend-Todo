const express = require("express");
const { getTasks, addTask, deleteTask, updateTask } = require("../controller/tasksApi");




const router = express.Router();



router.get("/todos" , getTasks);
router.post("/todos" , addTask);
router.delete("/todos/:id" , deleteTask);
router.put("/todos/:id" , updateTask);


module.exports = router;