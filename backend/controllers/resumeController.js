const Resume = require("../models/Resume");

const getResume = async (req, res) => {
  try {
    const resume = await Resume.findOne();

    res.json(resume);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const uploadResume = async (req, res) => {
  try {
    let resume = await Resume.findOne();

    if (!resume) {
      resume = await Resume.create({
        fileName: req.file.originalname,

        filePath: req.file.path,
      });
    } else {
      resume.fileName = req.file.originalname;

      resume.filePath =req.file.path;

      await resume.save();
    }

    res.json(resume);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteResume = async (req, res) => {
  try {
    const resume = await Resume.findOne();

    if (resume) {
      await Resume.findByIdAndDelete(resume._id);
    }

    res.json({
      message: "Resume Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getResume,
  uploadResume,
  deleteResume,
};
