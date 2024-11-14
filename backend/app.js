const express = require("express");
const mongoose = require("mongoose");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const app = express();
const PORT = 3000;

const categoryRoutes = require("./routes/category");

// Middleware para interpretar JSON
app.use(express.json());

// Configuração do Swagger
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "E-Commerce Store API",
      version: "1.0.0",
      description: "API para gerenciamento de uma loja virtual",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Rota de teste
app.get("/", (req, res) => {
  res.send("Server Running");
});

// Usar rotas de categorias
app.use("/api/categories", categoryRoutes);

// Conectar ao MongoDB
async function connectDb() {
  await mongoose.connect("mongodb://localhost:27017/", {
    dbName: "e-commerce-store-db",
  });
  console.log("MongoDB Connected");
}

connectDb().catch((err) => {
  console.error(err);
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Server Running on Port: ${PORT}`);
  console.log(`Swagger Docs available at http://localhost:${PORT}/api-docs`);
});
