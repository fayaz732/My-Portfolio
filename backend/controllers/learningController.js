const Learning = require("../models/Learning");

const getLearning = async (req, res) => {
  try {
    const learning = await Learning.find().sort({
      createdAt: -1,
    });

    res.json(learning);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createLearning = async (req, res) => {
  try {
    const learning = await Learning.create(req.body);

    res.status(201).json(learning);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteLearning = async (req, res) => {
  try {
    await Learning.findByIdAndDelete(req.params.id);

    res.json({
      message: "Learning Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getLearning,
  createLearning,
  deleteLearning,
};
