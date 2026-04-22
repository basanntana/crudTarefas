const express = require("express");
const router = express.Router();
const {
  createTask,
  listTasks,
  getTaskById,
  updateTask,
  deleteTask,
  toggleTaskComplete,
} = require("../controllers/tasksController");

router.post("/", createTask);
router.get("/", listTasks);
router.get("/:id", getTaskById);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
router.patch("/:id/complete", toggleTaskComplete);

module.exports = router;
