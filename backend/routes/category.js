const express = require("express");
const router = express.Router();
const {
  addCategory,
  updateCategory,
  deleteCategory,
  getAllCategories,
  getCategoryByID,
} = require("../handlers/category-handler");

/**
 * POST /api/categories
 * @summary Cria uma nova categoria
 * @tags Categorias
 * @param {object} request.body.required - Dados da categoria
 * @param {string} request.body.name - Nome da categoria
 * @response 200 - Sucesso ao criar categoria
 * @responseContent {object} 200.application/json
 * @response 500 - Erro ao criar categoria
 */
router.post("", async (req, res) => {
  try {
    let model = req.body;
    await addCategory(model);
    return res.status(200).json({ message: "criado" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao criar categoria" });
  }
});

/**
 * GET /api/categories
 * @summary Retorna todas as categorias
 * @tags Categorias
 * @response 200 - Lista de categorias obtida com sucesso
 * @responseContent {array<object>} 200.application/json
 * @response 500 - Erro ao buscar categorias
 */
router.get("", async (req, res) => {
  try {
    const categories = await getAllCategories();
    return res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao buscar categorias" });
  }
});

/**
 * GET /api/categories/{id}
 * @summary Procura uma categoria existente
 * @tags Categorias
 * @param {string} id.path.required - ID da categoria
 * @response 200 - Categoria encontrada com sucesso
 * @responseContent {object} 200.application/json
 * @response 500 - Erro ao encontrar categoria
 */
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const category = await getCategoryByID(id);
    return res.status(200).json(category);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao buscar categorias" });
  }
});

/**
 * PUT /api/categories/{id}
 * @summary Atualiza uma categoria existente
 * @tags Categorias
 * @param {string} id.path.required - ID da categoria
 * @param {object} request.body.required - Dados para atualização
 * @param {string} request.body.name - Novo nome da categoria
 * @response 200 - Categoria atualizada com sucesso
 * @responseContent {object} 200.application/json
 * @response 500 - Erro ao atualizar categoria
 */
router.put("/:id", async (req, res) => {
  try {
    const model = req.body;
    const id = req.params.id;

    await updateCategory(id, model);

    return res.status(200).json({ message: "atualizado" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao atualizar a categoria" });
  }
});

/**
 * DELETE /api/categories/{id}
 * @summary Deleta uma categoria
 * @tags Categorias
 * @param {string} id.path.required - ID da categoria
 * @response 200 - Categoria deletada com sucesso
 * @responseContent {object} 200.application/json
 * @response 500 - Erro ao deletar categoria
 */
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    await deleteCategory(id);

    return res.status(200).json({ message: "deletado" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao deletar a categoria" });
  }
});

module.exports = router;
