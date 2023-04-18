const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});
module.exports = mongoose.model("user_data", Schema, "user_data"); // collection name
