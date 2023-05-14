require("dotenv").config();
const cors = require("cors");
const express = require("express");
const axios = require("axios");
//
const app = express();
app.use(cors());
app.use(express.json());

const Comics = require("./routes/Comics");
const Caractères = require("./routes/Caractères");

app.use(Comics);
app.use(Caractères);

app.all("*", (req, res) => {
  res.status(404).json({ message: "This route does not exist" });
});

app.listen(process.env.PORT, () => {
  console.log("serveur started");
});
