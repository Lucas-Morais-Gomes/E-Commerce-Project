const express = require("express");
const router = express.Router();
const Category = require("../db/category");

/**
 * @swagger
 * tags:
 *   name: Categorias
 *   description: Endpoints para gerenciamento de categorias
 */

/**
 * @swagger
 * /api/categories:
 *   post:
 *     summary: Cria uma nova categoria
 *     tags: [Categorias]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: categoria
 *     responses:
 *       201:
 *         description: Categoria criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: 645f1c1d7d3f4b3c7a1e5a4f
 *                 name:
 *                   type: string
 *                   example: categoria
 *       500:
 *         description: Erro no servidor
 */
router.post("", async (req, res) => {
  try {
    category = req.body;
    let category = new Category({ name: category.name });
    await category.save();
    return category.toObject();
    // return res.status(201).json(savedCategory);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao criar categoria" });
  }
});

module.exports = router;
