const express = require("express");
const {
  addBrand,
  updateBrand,
  deleteBrand,
  getBrandByID,
} = require("../handlers/brand-handler");
const router = express.Router();

/**
 * POST /api/products
 * @summary Cria uma nova marca
 * @tags Produtos
 * @param {object} request.body.required - Dados da marca
 * @param {string} request.body.name - Nome da marca
 * @response 200 - Marca criada com sucesso
 * @response 500 - Erro ao criar a marca
 */
router.post("", async (req, res) => {
  try {
    let model = req.body;
    await addBrand(model);
    return res.status(200).json({ message: "criado" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao criar marca" });
  }
});

/**
 * PUT /api/products/{id}
 * @summary Atualiza uma marca existente
 * @tags Produtos
 * @param {string} id.path.required - ID da marca a ser atualizada
 * @param {object} request.body.required - Dados da marca
 * @param {string} request.body.name - Novo nome da marca
 * @response 200 - Marca atualizada com sucesso
 * @response 500 - Erro ao atualizar a marca
 */
router.put("/:id", async (req, res) => {
  try {
    let model = req.body;
    let id = req.params.id;
    await updateBrand(id, model);
    return res.status(200).json({ message: "atualizado" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao atualizar marca" });
  }
});

/**
 * DELETE /api/products/{id}
 * @summary Deleta uma marca existente
 * @tags Produtos
 * @param {string} id.path.required - ID da marca a ser deletada
 * @response 200 - Marca deletada com sucesso
 * @response 500 - Erro ao deletar a marca
 */
router.delete("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    await deleteBrand(id);
    return res.status(200).json({ message: "deletado" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao deletar marca" });
  }
});

/**
 * GET /api/products/{id}
 * @summary Retorna uma marca pelo ID
 * @tags Produtos
 * @param {string} id.path.required - ID da marca
 * @response 200 - Marca encontrada com sucesso
 * @response 404 - Marca não encontrada
 * @response 500 - Erro ao encontrar a marca
 */
router.get("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    const brand = await getBrandByID(id);

    if (!brand) {
      return res.status(404).json({ error: "Marca não encontrada" });
    }

    return res.status(200).json(brand);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao encontrar marca" });
  }
});

module.exports = router;
