const express = require("express");
const {
  getAllTasks,
  createTask,
  deleteTask,
  updateTask,
  getTask,
} = require("../controllers/tasks");
const router = express.Router();

router.get("/", getAllTasks);
router.post("/", createTask);

router.get("/:id", getTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
