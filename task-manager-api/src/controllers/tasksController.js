const Task = require("../models/Task");
const { v4: uuidv4 } = require("uuid");

const createTask = (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res
      .status(400)
      .json({ error: "Title e description são obrigatórios" });
  }

  const task = Task.create(title, description);
  res.status(201).json(task);
};

const listTasks = (req, res) => {
  const { title, description } = req.query;
  const tasks = Task.findAll({ title, description });
  res.json(tasks);
};

const getTaskById = (req, res) => {
  const task = Task.findById(req.params.id);
  if (!task) {
    return res.status(404).json({ error: "Tarefa não encontrada" });
  }
  res.json(task);
};

const updateTask = (req, res) => {
  const task = Task.findById(req.params.id);
  if (!task) {
    return res.status(404).json({ error: "Tarefa não encontrada" });
  }

  const updates = req.body;
  const updatedTask = Task.update(req.params.id, updates);
  res.json(updatedTask);
};

const deleteTask = (req, res) => {
  const task = Task.findById(req.params.id);
  if (!task) {
    return res.status(404).json({ error: "Tarefa não encontrada" });
  }

  Task.delete(req.params.id);
  res.status(204).send();
};

const toggleTaskComplete = (req, res) => {
  const task = Task.findById(req.params.id);
  if (!task) {
    return res.status(404).json({ error: "Tarefa não encontrada" });
  }

  const updatedTask = Task.toggleComplete(req.params.id);
  res.json(updatedTask);
};

module.exports = {
  createTask,
  listTasks,
  getTaskById,
  updateTask,
  deleteTask,
  toggleTaskComplete,
};
