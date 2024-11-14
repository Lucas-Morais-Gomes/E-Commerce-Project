const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Server Running");
});

async function connectDb() {
  await mongoose.connect("mongodb://localhost:27017/", {
    dbName: "e-commerce-store-db",
  });
  console.log("MongoDB Connected");
}

connectDb().catch((err) => {
  console.error(err);
});

app.listen(PORT, () => {
  console.log(`Server Running on Port: ${PORT}`);
});
