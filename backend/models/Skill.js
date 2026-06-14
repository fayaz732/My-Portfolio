const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },

  skill: {
    type: String,
    required: true,
  },

  level: {
    type: Number,
    default: 80,
  },
});

module.exports = mongoose.model("Skill", skillSchema);
