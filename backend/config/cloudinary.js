require("dotenv").config();
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

(async () => {
  try {
    const result = await cloudinary.uploader.upload(
      "C:/Users/fayaz/Fayaz_portfolio/backend/test.jpg",
      {
        resource_type: "image",
        folder: "portfolio"
      }
    );

    console.log(result);
  } catch (e) {
    console.dir(e, { depth: null });
  }
})();