const express = require("express");
const cors = require("cors");
require("./config");
const User = require("./schema");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/signup", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  res.send(result);
});

app.post("/login", async (req, res) => {
  if (req.body.email && req.body.password) {
    let user = await User.findOne(req.body);
    if (user) res.send(user);
    else res.send({ result: "user not found" });
  } else res.send({ result: "user not found" });
});

app.listen(5000);
