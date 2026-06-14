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

router.post("/photo", protect, upload.single("image"), uploadProfilePhoto);

module.exports = router;
