"use strict";
const Gallery = require("../models/gallery");
const addPhoto = (req, res) => {
  var photos = req.body.photos;
  photo
    .save()
    .then((newPhoto) => {
      return res.json({ message: "good" });
    })
    .catch((err) => {
      return res.json({ message: "not good" });
    });
};
const getGallery = (req, res) => {
  Gallery.find({}).exec((err, docs) => {
    if (err) {
      return res.json({ status: 404 });
    } else {
      return res.json({ status: 200, docs });
    }
  });
};

// const deletePhoto = (req, res) => {
//   const id = req.params.Gid;
//   const photoID = req.params.Pid;
//   Galery.findById(id)
//     .then((gal) => {
//       if (gal != null) {
//         Galery.findByIdAndUpdate(
//           id,
//           {
//             $pullAll: {
//               photos: [photoID],
//             },
//           },
//           { new: true }
//         )
//           .then((G) => getGalery(req, res))
//           .catch((e) => {
//             res.json({ status: 400 });
//           });
//       }
//     })
//     .catch((e) => {
//       res.json({ status: 404 });
//     });
// };

module.exports = {
  addPhoto,
  getGallery,
  //   deletePhoto,
};
