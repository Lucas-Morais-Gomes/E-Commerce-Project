const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "API de Categorias",
    description: "Documentação automática com Swagger",
  },
  host: "localhost:3000",
  schemes: ["http"],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./routes/category.js"]; // Adicione aqui os arquivos de rota

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("./app.js"); // Altere para o seu arquivo principal
});
