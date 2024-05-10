const {Router} = require("express");
const router = Router();
const { getTask, updateTask, createTask, removeTask } = require("../controllers/TaskControllers");


router.get("/get", getTask);
router.post("/create", createTask);
router.put("/update/:id", updateTask);
router.delete("/delete/:id", removeTask);

module.exports = router;