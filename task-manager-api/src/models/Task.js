class Task {
  constructor() {
    this.tasks = [];
    this.nextId = 1;
  }

  create(title, description) {
    const task = {
      id: this.nextId++,
      title,
      description,
      completed_at: null,
      created_at: new Date(),
      updated_at: new Date(),
    };
    this.tasks.push(task);
    return task;
  }

  findAll(filters = {}) {
    let filtered = this.tasks;

    if (filters.title) {
      filtered = filtered.filter((task) =>
        task.title.toLowerCase().includes(filters.title.toLowerCase()),
      );
    }

    if (filters.description) {
      filtered = filtered.filter((task) =>
        task.description
          .toLowerCase()
          .includes(filters.description.toLowerCase()),
      );
    }

    return filtered;
  }

  findById(id) {
    return this.tasks.find((task) => task.id === parseInt(id));
  }

  update(id, updates) {
    const task = this.findById(id);
    if (!task) return null;

    if (updates.title !== undefined) task.title = updates.title;
    if (updates.description !== undefined)
      task.description = updates.description;

    task.updated_at = new Date();
    return task;
  }

  toggleComplete(id) {
    const task = this.findById(id);
    if (!task) return null;

    task.completed_at = task.completed_at ? null : new Date();
    task.updated_at = new Date();
    return task;
  }

  delete(id) {
    const index = this.tasks.findIndex((task) => task.id === parseInt(id));
    if (index === -1) return false;

    this.tasks.splice(index, 1);
    return true;
  }
}

module.exports = new Task();
