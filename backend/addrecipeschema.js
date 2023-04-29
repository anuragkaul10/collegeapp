const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: String,
  description: String,
  author: String,
  ingredients: String,
  instructions: String,
  preptime: Number,
  cooktime: Number,
  totaltime: Number,
  image: String,
});

module.exports = mongoose.model("AddRecipe", recipeSchema, "AddRecipe");
