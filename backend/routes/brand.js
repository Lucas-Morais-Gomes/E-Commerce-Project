const express = require("express");
const {
  addBrand,
  updateBrand,
  deleteBrand,
  getBrandByID,
  getAllBrands,
} = require("../handlers/brand-handler");
const router = express.Router();

/**
 * POST /api/brands
 * @summary Cria uma nova marca
 * @tags Marcas
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
 * PUT /api/brands/{id}
 * @summary Atualiza uma marca existente
 * @tags Marcas
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
 * DELETE /api/brands/{id}
 * @summary Deleta uma marca existente
 * @tags Marcas
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
 * GET /api/brands/{id}
 * @summary Retorna uma marca pelo ID
 * @tags Marcas
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

/**
 * GET /api/brands
 * @summary Retorna todas as marcas
 * @tags Marcas
 * @response 200 - Lista de marcas obtida com sucesso
 * @responseContent {Array<object>} 200.application/json
 * @response 500 - Erro ao buscar marcas
 */
router.get("", async (req, res) => {
  try {
    let brands = await getAllBrands();

    // Verifica se há marcas disponíveis
    if (brands.length === 0) {
      return res.status(404).json({ message: "Nenhuma marca encontrada" });
    }

    return res.status(200).json(brands);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao buscar marcas" });
  }
});

module.exports = router;
