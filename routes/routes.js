const express = require("express");
const { getGalery } = require("../controllers/galleryController");
const router = express.Router();

router.post("/gallery", getGalery);

module.exports = {
  routes: router,
};
