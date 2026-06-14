const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    console.log("Uploading:", file.originalname);

    return {
      folder: "portfolio/profile",
      public_id: Date.now().toString(),
    };
  },
});

const upload = multer({ storage });

module.exports = upload;