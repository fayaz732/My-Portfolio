const express = require("express");

const router = express.Router();

const upload = require("../middleware/certificateUpload");

const {
  getCertificates,
  createCertificate,
  deleteCertificate,
} = require("../controllers/certificateController");

const { protect } = require("../middleware/authMiddleware");

router.get("/", getCertificates);

router.post("/", protect, upload.single("image"), createCertificate);

router.delete("/:id", protect, deleteCertificate);

module.exports = router;
