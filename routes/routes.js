const express = require("express");
const { getGallery, addPhoto } = require("../controllers/galleryController");
const router = express.Router();

router.get("/gallery", getGallery);
router.post("/gallery", addPhoto);

module.exports = {
  routes: router,
};
