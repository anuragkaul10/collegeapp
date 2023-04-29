// Import the necessary modules and create an instance of express
require("./config");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Recipe = require("./addrecipeschema");

const app = express();

app.use(cors());

// // Set up the multer storage engine to specify where to store uploaded files
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads");
//   },
//   filename: function (req, file, cb) {
//     // const ext = path.extname(file.originalname);
//     // const filename = file.originalname.replace(ext, "").toLowerCase().split(" ").join("-") + "-" + Date.now() + ext;
//     // const filename = file.fieldname + "-" + Date.now() + ext;

//     // console.log(filename);
//     // cb(null, filename);
//     // cb(null, file.originalname);
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// // Create an instance of the multer middleware to handle the file upload
// const upload = multer({
//   storage: storage,
//   fileFilter: (req, file, cb) => {
//     const allowedFileTypes = /jpeg|jpg|png|gif/;
//     const ext = path.extname(file.originalname).toLowerCase();
//     const isFileTypeAllowed = allowedFileTypes.test(ext);
//     if (isFileTypeAllowed) {
//       cb(null, true);
//     } else {
//       cb(new Error("Invalid file type. Only JPEG, JPG, PNG and GIF files are allowed."));
//     }
//   },
// }).single("image");

// // Define the API endpoint to handle the recipe upload
// app.use(express.json());

// app.post("/addrecipes", (req, res) => {
//   // Use multer to handle the file upload
//   upload(req, res, async (err) => {
//     if (err) {
//       console.error(err);
//       return res.status(400).json({ error: err.message });
//     }

//     try {
//       // Extract the recipe data from the request body
//       // console.log(req);
//       // console.log(req.body);

//       const { title, description, author, ingredients, instructions, preptime, cooktime, totaltime } = req.body;
//       const image = req.file.filename;

//       // Create a new recipe object with the extracted data and the path to the uploaded image file
//       const recipe = new Recipe({
//         title,
//         description,
//         author,
//         ingredients,
//         instructions,
//         preptime,
//         cooktime,
//         totaltime,
//         image,
//       });

//       // Save the recipe to the database
//       const savedRecipe = await recipe.save();

//       // Send a response with the saved recipe object
//       res.status(201).json(savedRecipe);
//     } catch (error) {
//       console.error(error);
//       // If an error occurs, delete the uploaded image file and send an error response
//       if (req.file) {
//         const imagePath = path.join(__dirname, "uploads", req.file.filename);
//         fs.unlink(imagePath, (err) => {
//           if (err) {
//             console.error(err);
//           }
//         });
//       }
//       res.status(500).json({ error: "Server error. Please try again later." });
//     }
//   });
// });

// Create a Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Create a Multer instance
const upload = multer({ storage: storage });

// Create a route to handle recipe uploads
app.use(express.json());
app.post("/addrecipes", upload.single("image"), async (req, res) => {
  const { title, description, author, ingredients, instructions, preptime, cooktime, totaltime } = req.body;

  if (!req.file) {
    return res.status(400).json({ error: "No image file uploaded" });
  }

  const image = req.file.filename;
  // console.log(req);
  // console.log(image);

  try {
    // Create a new recipe document
    const recipe = new Recipe({ title, description, author, ingredients, instructions, preptime, cooktime, totaltime, image });

    // Save the recipe to MongoDB
    await recipe.save();

    // Send a response with the saved recipe
    res.json(recipe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while saving the recipe" });
  }
});

app.listen(5000);
