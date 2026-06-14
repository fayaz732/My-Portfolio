const express = require("express");

const router = express.Router();

const {
  getProjects,
  createProject,
  deleteProject,
} = require("../controllers/projectController");

const upload = require("../middleware/upload");

const { protect } = require("../middleware/authMiddleware");

router.get("/", getProjects);

router.post("/", protect, upload.single("image"), createProject);

router.delete("/:id", protect, deleteProject);

module.exports = router;
