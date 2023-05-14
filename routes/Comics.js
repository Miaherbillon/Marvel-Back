require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");

///comics/

router.get("/comics", async (req, res) => {
  const name = req.query.title || "";
  const skip = req.query.skip || "0";
  const limit = req.query.limit || "100";

  const comics = await axios.get(
    `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}&title=${name}&skip=${skip}&limit=${limit}`
  );

  console.log(comics.data.results);
  res.json(comics.data);
});

///comics/:characterId

router.get("/comics/:skip/:limit/:title", async (req, res) => {
  const name = req.query.title || "";
  const skip = req.query.skip || "0";
  const limit = req.query.limit || "100";

  const response = await axios.get(
    `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}&title=${name}&skip=${skip}&limit=${limit}`
  );

  const comicsId = response.data;
  res.json(comicsId);
});

// /comic/:comicId

router.get("/comic/:id", async (req, res) => {
  const id = req.params.id;

  const response = await axios.get(
    `https://lereacteur-marvel-api.herokuapp.com/comic/${id}?apiKey=${process.env.API_KEY}`
  );

  const comicsId = response.data;
  res.json(comicsId);
});

module.exports = router;
