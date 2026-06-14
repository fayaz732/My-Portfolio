const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

// const storage = new CloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: "portfolio/profile",
//     allowed_formats: [
//       "jpg",
//       "jpeg",
//       "png",
//       "webp",
//     ],
//   },
// });

// module.exports = multer({
//   storage,
// });
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => ({
    folder: "portfolio/profile",
  }),
});
module.exports = multer({
  storage,
});