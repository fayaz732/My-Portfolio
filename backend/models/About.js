const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
  degree: {
    type: String,
    default: "B.E Artificial Intelligence & Machine Learning",
  },

  college: {
    type: String,
    default: "Cambridge Institute of Technology",
  },

  year: {
    type: String,
    default: "2023 - 2027",
  },

  cgpa: {
    type: String,
    default: "8.2",
  },

  languages: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("About", aboutSchema);
