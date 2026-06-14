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
  cloudinary,
  params: async (req, file) => {
    return {
      folder: "portfolio/profile",
      resource_type: "image",
    };
  },
});
module.exports = multer({
  storage,
});