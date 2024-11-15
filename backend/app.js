const express = require("express");
const mongoose = require("mongoose");
const expressJSDocSwagger = require("express-jsdoc-swagger");
const app = express();
const PORT = 3000;
const cors = require("cors");
const categoryRoutes = require("./routes/category");

app.use(cors());
app.use(express.json());

// Configuração do express-jsdoc-swagger
const options = {
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
  baseDir: __dirname,
  filesPattern: "./routes/*.js",
  swaggerUIPath: "/api-docs",
  exposeSwaggerUI: true,
  exposeApiDocs: false,
  apiDocsPath: "/v3/api-docs",
};

expressJSDocSwagger(app)(options);

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
