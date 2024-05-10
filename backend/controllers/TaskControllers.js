const TaskModel = require("../models/TaskModel");

module.exports = {
    getTask : async (req,res) => {
        const tasks = await TaskModel.find()
         res.send(tasks)       
    },

    createTask: (req, res) => {
        const { task } = req.body;
        TaskModel.create({ task })
            .then((data) => {
                console.log("Saved Success");
                res.status(201).send(data); // Enviar los datos en la respuesta
            })
            .catch((error) => {
                console.log(error);
                res.status(500).send("Error saving task"); // Enviar un mensaje de error en caso de que falle la creación
            });
    },
    updateTask: (req, res) => {
        const { id } = req.params;
        const { task } = req.body;
        TaskModel.findByIdAndUpdate(id, { task })
            .then((result) => {
                if (result) {
                    res.send("Updated successfully!");
                } else {
                    res.status(404).send("Task not found");
                }
            })
            .catch((error) => {
                console.log(error);
                res.status(500).send("Error updating task");
            });
    }
    ,

    removeTask: (req, res) => {
        const { id } = req.params;
        TaskModel.findOneAndDelete(id)
            .then((result) => {
                if (result) {
                    res.send("Deleted Successfully!");
                } else {
                    res.status(404).send("Task not found");
                }
            })
            .catch((error) => {
                console.log(error);
                res.status(500).send("Error removing task");
            });
    }
    
}