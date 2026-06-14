const express = require("express");

const router = express.Router();

const {
  getLearning,
  createLearning,
  deleteLearning,
} = require("../controllers/learningController");

const { protect } = require("../middleware/authMiddleware");

router.get("/", getLearning);

router.post("/", protect, createLearning);

router.delete("/:id", protect, deleteLearning);

module.exports = router;
