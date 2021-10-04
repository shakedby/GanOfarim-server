const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Gallery = new Schema(
  {
    photos: [
      {
        type: string,
        ref: "Photo",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Gallery", Gallery);
