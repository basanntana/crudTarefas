const validateCreateTask = (req, res, next) => {
  const { title, description } = req.body;

  if (!title || typeof title !== "string" || title.trim().length === 0) {
    return res.status(400).json({
      error: "Título é obrigatório e deve ser uma string válida",
    });
  }

  if (
    !description ||
    typeof description !== "string" ||
    description.trim().length === 0
  ) {
    return res.status(400).json({
      error: "Descrição é obrigatória e deve ser uma string válida",
    });
  }

  // Sanitizar entrada
  req.body.title = title.trim();
  req.body.description = description.trim();

  next();
};

const validateUpdateTask = (req, res, next) => {
  const { title, description } = req.body;

  // Permite campos vazios para update parcial
  if (
    title !== undefined &&
    (typeof title !== "string" || title.trim().length === 0)
  ) {
    return res.status(400).json({
      error: "Título deve ser uma string válida quando fornecido",
    });
  }

  if (
    description !== undefined &&
    (typeof description !== "string" || description.trim().length === 0)
  ) {
    return res.status(400).json({
      error: "Descrição deve ser uma string válida quando fornecida",
    });
  }

  // Sanitizar entrada
  if (title !== undefined) req.body.title = title.trim();
  if (description !== undefined) req.body.description = description.trim();

  next();
};

const validateIdParam = (req, res, next) => {
  const id = req.params.id;

  if (!/^\d+$/.test(id)) {
    return res.status(400).json({
      error: "ID deve ser um número inteiro válido",
    });
  }

  next();
};

module.exports = {
  validateCreateTask,
  validateUpdateTask,
  validateIdParam,
};
