const Category = require("../db/category");

async function addCategory(model) {
  let category = new Category({ name: model.name });
  await category.save();
}

async function updateCategory(id, model) {
  await Category.findOneAndUpdate({ _id: id }, model, {
    new: true,
  });
}

async function deleteCategory(id) {
  await Category.findOneAndDelete({ _id: id });
}

async function getAllCateogories() {
  let categories = await Category.find();
  return categories.map((c) => c.toObject());
}

module.exports = {
  addCategory,
  updateCategory,
  deleteCategory,
  getAllCateogories,
};
