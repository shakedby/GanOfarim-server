const Gallery = require("../models/gallery");

const add = (req, res) => {
  console.log(req.body.url);
  const photo = new Gallery({
    url: req.body.url,
  });
  return photo
    .save()
    .then((newPhoto) => {
      res.json({ message: "good" });
    })
    .catch((err) => {
      console.log(err);
      res.json({ message: "not good" });
    });
};
const getGallery = (req, res) => {
  Gallery.find({}).exec((err, arr) => {
    if (err) {
      return res.json({ status: 404 });
    } else {
      return res.json({ status: 200, arr });
    }
  });
};

const deletePhoto = (req, res) => {
  const photoID = req.params.Pid;
  Gallery.findOneAndDelete(photoID)
    .then(() => getGallery(req, res))
    .catch((e) => {
      res.json({ status: 404 });
    });
};

module.exports = {
  add,
  getGallery,
  deletePhoto,
};
