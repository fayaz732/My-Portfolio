const express = require("express");

const router = express.Router();

const upload = require("../middleware/profileUpload");

const {
  getProfile,
  updateProfile,
  uploadProfilePhoto,
} = require("../controllers/profileController");

const { protect } = require("../middleware/authMiddleware");

router.get("/", getProfile);

router.put("/", protect, updateProfile);

// router.post("/photo", protect, upload.single("image"), uploadProfilePhoto);
router.post(
  "/photo",
  protect,

  (req, res, next) => {
    console.log("Before Upload");
    next();
  },

  upload.single("image"),

  (req, res, next) => {
    console.log("After Upload");
    next();
  },

  uploadProfilePhoto
);

router.use((err, req, res, next) => {
  console.error("UPLOAD MIDDLEWARE ERROR:");
  console.error(err);
  console.error(JSON.stringify(err, null, 2));

  res.status(500).json({
    message: err.message,
  });
});
module.exports = router;
