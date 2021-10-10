const express = require("express");
const {
  getGallery,
  add,
  deletePhoto,
} = require("../controllers/galleryController");
const router = express.Router();

//router.get("/gallery", getGallery);
//router.post("/gallery", add);
router.get("/gallerytest/:id", deletePhoto);

module.exports = {
  routes: router,
};
