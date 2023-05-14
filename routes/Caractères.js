require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");

///caractères
router.get("/characters", async (req, res) => {
  const name = req.query.name || "";
  const skip = req.query.skip || "0";
  const limit = req.query.limit || "100";

  const characters = await axios.get(
    `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}&name=${name}&skip=${skip}&limit=${limit}`
  );

  console.log(characters.data);
  res.json(characters.data);
});

router.get("/character/:id", async (req, res) => {
  const id = req.params.id;
  const character = await axios.get(
    `https://lereacteur-marvel-api.herokuapp.com/character/${id}?apiKey=${process.env.API_KEY}`
  );

  console.log(id);
  res.json(character.data);
});

module.exports = router;
