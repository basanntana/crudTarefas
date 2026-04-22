const express = require('express');
const tasksRoutes = require('./routes/tasksRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/tasks', tasksRoutes);

app.listen(PORT, () => {
  console.log(`Server rodando na porta`${PORT});
 console.log(`Teste as rotas em: http://localhost:${PORT}/tasks`);
});