const express = require("express");
const {
  getGallery,
  add,
  deletePhoto,
} = require("../controllers/galleryController");
const router = express.Router();

router.get("/getallgal", getGallery);
router.post("/addtogal", add);
router.get("/deletegal/:id", deletePhoto);

module.exports = router;
