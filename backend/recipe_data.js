require("./config");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Recipe = require("./addrecipeschema");
const addrecipeschema = require("./addrecipeschema");

const app = express();

app.use(cors());
app.use(express.static("public"));

//
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/recipedata");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

//
const upload = multer({ storage: storage });

//
app.use(express.json());
app.post("/addrecipes", upload.single("image"), async (req, res) => {
  const { title, description, author, ingredients, instructions, preptime, cooktime, totaltime } = req.body;

  if (!req.file) {
    return res.status(400).json({ error: "No image file uploaded" });
  }

  const image = req.file.filename;

  try {
    //
    const recipe = new Recipe({ title, description, author, ingredients, instructions, preptime, cooktime, totaltime, image });

    //
    await recipe.save();

    //
    res.json(recipe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while saving the recipe" });
  }
});

//api
//get
//To React
app.get("/addrecipes/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const form = await Recipe.findById(id);
    res.json(form);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});
app.listen(8000);
