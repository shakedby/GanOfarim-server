const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Gallery = new Schema(
  {
    url: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Gallery", Gallery);
